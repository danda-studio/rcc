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

                using var client = new SmtpClient(_gmailSetting.SmtpServer, _gmailSetting.SmtpPort)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(_gmailSetting.Email, _gmailSetting.Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_gmailSetting.Email),
                    Subject = $"New Contact Request from {request.Name}",
                    Body = FormatEmailBody(request),
                    IsBodyHtml = true
                };

                if (_gmailSetting.Recipients != null && _gmailSetting.Recipients.Count != 0)
                {
                    foreach (var recipient in _gmailSetting.Recipients)
                    {
                        if (!string.IsNullOrWhiteSpace(recipient))
                            mailMessage.To.Add(recipient.Trim());
                    }
                }
                else
                {
                    mailMessage.To.Add(_gmailSetting.Email);
                }


                await client.SendMailAsync(mailMessage);

                return new SendContactResponse { Success = true };
        }

        private string FormatEmailBody(SendContactRequest request)
        {
            try
            {
                var filePath = Path.Combine("files", "email-message.html");
                var htmlTemplate = File.ReadAllText(filePath);

                string contactMethodText = request.ContactMethod switch
                {
                    ContactMethod.Call => "Звонок",
                    ContactMethod.WhatsApp => "WhatsApp",
                    ContactMethod.Telegram => "Telegram",
                    _ => "Не указан"
                };

                // Заменяем плейсхолдеры на реальные данные
                var formattedHtml = htmlTemplate
                    .Replace("{{NAME}}", request.Name)
                    .Replace("{{PHONE}}", $"+{request.Phone?.Code} {request.Phone?.Number}")
                    .Replace("{{CONTACT_METHOD}}", contactMethodText)
                    .Replace("{{EMAIL}}", request.Email)
                    .Replace("{{DATE}}", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));

                return formattedHtml;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error reading HTML template: {ex.Message}");
                // Fallback - обычный текст
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
}

