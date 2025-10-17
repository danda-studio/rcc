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
                    IsBodyHtml = false
                };

                mailMessage.To.Add(_gmailSetting.Email);

                await client.SendMailAsync(mailMessage);

                return new SendContactResponse { Success = true };
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

