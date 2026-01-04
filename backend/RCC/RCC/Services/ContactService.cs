using Microsoft.Extensions.Options;
using RCC.Services.Model;
using RCC.Validator;
using System.Net;
using System.Net.Mail;

namespace RCC.Services
{
    /// <summary>
    /// Сервис для отправки контактных сообщений.
    /// </summary>
    public class ContactService : IContactService
    {
        private readonly EmailSetting _emailSetting;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="ContactService"/>.
        /// </summary>
        /// <param name="emailSetting">Настройки Gmail для отправки сообщений.</param>
        public ContactService(IOptions<EmailSetting> emailSetting)
        {
            _emailSetting = emailSetting.Value;
        }

        /// <summary>
        /// Отправляет контактное сообщение на указанные адреса электронной почты.
        /// </summary>
        /// <param name="request">Данные заявки на контакт.</param>
        /// <returns>Объект <see cref="SendContactResponse"/> с результатом отправки.</returns>
        public async Task<SendContactResponse> SendContact(SendContactRequest request)
        {
            // Валидация имени
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };

            // Валидация email
            // if (!ContactValidator.ValidateEmail(request.Email, out var emailError))
            //     return new SendContactResponse { Success = false, Message = emailError };

            // Валидация телефона
            if (!ContactValidator.ValidatePhone(request.Phone.Code, request.Phone.Number, out var phoneError))
                return new SendContactResponse { Success = false, Message = phoneError };

            // Настройка SMTP клиента
            using var client = new SmtpClient(_emailSetting.SmtpServer, _emailSetting.SmtpPort)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(_emailSetting.Email, _emailSetting.Password),
                UseDefaultCredentials = false,
                DeliveryMethod = SmtpDeliveryMethod.Network
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(_emailSetting.Email),
                Subject = $"New Contact Request from {request.Name}",
                Body = FormatEmailBody(request),
                IsBodyHtml = true
            };

            // Добавление получателей
            if (_emailSetting.Recipients != null && _emailSetting.Recipients.Count != 0)
            {
                foreach (var recipient in _emailSetting.Recipients)
                {
                    if (!string.IsNullOrWhiteSpace(recipient))
                        mailMessage.To.Add(recipient.Trim());
                }
            }
            else
            {
                mailMessage.To.Add(_emailSetting.Email);
            }

            await client.SendMailAsync(mailMessage);

            return new SendContactResponse { Success = true };
        }

        /// <summary>
        /// Форматирует тело письма на основе HTML-шаблона.
        /// </summary>
        /// <param name="request">Данные заявки на контакт.</param>
        /// <returns>Строка с HTML или текстовой версией письма.</returns>
        private string FormatEmailBody(SendContactRequest request)
        {
            var filePath = Path.Combine("files", "email-message.html");

            if (!File.Exists(filePath))
                return FormatPlainTextEmail(request);

            var htmlTemplate = File.ReadAllText(filePath);

            string contactMethodText = request.ContactMethod switch
            {
                ContactMethod.Call => "Звонок",
                ContactMethod.WhatsApp => "WhatsApp",
                ContactMethod.Telegram => "Telegram",
                _ => "Не указан"
            };

            // Заменяем плейсхолдеры на реальные данные
            return htmlTemplate
                .Replace("{{NAME}}", request.Name)
                .Replace("{{PHONE}}", $"+{request.Phone?.Code} {request.Phone?.Number}")
                .Replace("{{CONTACT_METHOD}}", contactMethodText)
                .Replace("{{EMAIL}}", request.Email)
                .Replace("{{DATE}}", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
        }

        private static string FormatPlainTextEmail(SendContactRequest request)
        {
            return $@"
            Новая заявка
            -------------------
            Имя: {request.Name}
            Email: {request.Email}
            Номер телефона: +{request.Phone?.Code} {request.Phone?.Number}
            Способ связи с клиентом: {request.ContactMethod}
            -------------------
            Дата заявки: {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
        }

    }
}
