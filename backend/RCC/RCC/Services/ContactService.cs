using Microsoft.Extensions.Options;
using RCC.Services.Model;
using RCC.Validator;
using System.Net;
using System.Net.Mail;

namespace RCC.Services
{
    public class ContactService : IContactService
    {
        private readonly GmailSetting _gmailSetting;

        public ContactService(IOptions<GmailSetting> gmailSetting)
        {
            _gmailSetting = gmailSetting.Value;
        }

        public async Task<SendContactResponse> SendContact(SendContactRequest request)
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };

            if (!ContactValidator.ValidateEmail(request.Email, out var emailError))
                return new SendContactResponse { Success = false, Message = emailError };

            if (!ContactValidator.ValidatePhone(request.Phone.Code, request.Phone.Number, out var phoneError))
                return new SendContactResponse { Success = false, Message = phoneError };
            try
            {
                var recipients = new List<string>();
                if (_gmailSetting.Recipients != null && _gmailSetting.Recipients.Count != 0)
                {
                    recipients.AddRange(_gmailSetting.Recipients.Where(r => !string.IsNullOrWhiteSpace(r)));
                }
                else
                {
                    recipients.Add(_gmailSetting.Email);
                }

                var emailTasks = recipients.Select(recipient =>
                    SendSingleEmailAsync(recipient, request)
                ).ToArray();

                // Ждем завершения всех отправок (макс 30 секунд)
                await Task.WhenAll(emailTasks);

                // Проверяем результаты
                var successfulSends = emailTasks.Count(t => t.Result);
                Console.WriteLine($"Successfully sent {successfulSends} out of {recipients.Count} emails");

                return new SendContactResponse { Success = successfulSends > 0 };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in SendContact: {ex.Message}");
                return new SendContactResponse { Success = false, Message = "Failed to send email" };
            }
        }

        private async Task<bool> SendSingleEmailAsync(string recipient, SendContactRequest request)
        {
            try
            {
                using var client = new SmtpClient(_gmailSetting.SmtpServer, _gmailSetting.SmtpPort)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(_gmailSetting.Email, _gmailSetting.Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    Timeout = 15000 // 15 секунд на каждую отправку
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_gmailSetting.Email),
                    Subject = $"New Contact Request from {request.Name}",
                    Body = FormatEmailBody(request),
                    IsBodyHtml = false
                };

                mailMessage.To.Add(recipient);

                Console.WriteLine($"Attempting to send to: {recipient}");
                await client.SendMailAsync(mailMessage);
                Console.WriteLine($"Successfully sent to: {recipient}");

                // Задержка между отправками
                await Task.Delay(1000);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send to {recipient}: {ex.Message}");
                return false;
            }
        }

        private string FormatEmailBody(SendContactRequest request)
        {
            return $@"
            Новая заявка
            -------------------
            Имя: {request.Name}
            Email: {request.Email}
            Номер телефона: +{request.Phone?.Code} {request.Phone?.Number}
            Способ связи с клиентом: {request.ContactMethod}
            -------------------
            Дата заявки: {DateTime.Now:yyyy-MM-dd HH:mm:ss}
            ";
        }
    }
}

