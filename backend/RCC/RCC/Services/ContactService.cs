using Microsoft.Extensions.Options;
using RCC.Services.Model;
using RCC.Validator;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace RCC.Services
{
    /// <summary>
    /// Сервис для отправки контактных сообщений и лидов.
    /// Отвечает за валидацию данных, отправку email и передачу данных во внешний CRM API.
    /// </summary>
    public class ContactService : IContactService
    {
        private readonly EmailSetting _emailSetting;
        private readonly IExternalLeadService _externalLeadService;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="ContactService"/>.
        /// </summary>
        /// <param name="emailSetting">Настройки для отправки писем (SMTP, от кого, кому).</param>
        /// <param name="externalLeadService">Сервис для отправки лидов во внешний CRM API.</param>
        public ContactService(
            IOptions<EmailSetting> emailSetting,
            IExternalLeadService externalLeadService)
        {
            _emailSetting = emailSetting.Value;
            _externalLeadService = externalLeadService;
        }

        /// <summary>
        /// Отправляет контактное сообщение на указанные адреса электронной почты и передаёт лид в CRM API.
        /// </summary>
        /// <param name="request">Данные заявки на контакт (с фронтенда).</param>
        /// <param name="ipAddress">IP адрес клиента (извлекается с сервера).</param>
        /// <returns>Объект <see cref="SendContactResponse"/> с результатом отправки.</returns>
        public async Task<SendContactResponse> SendContact(SendContactRequest request, string ipAddress = "")
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };

            // if (!ContactValidator.ValidateEmail(request.Email, out var emailError))
            //     return new SendContactResponse { Success = false, Message = emailError };

            // Валидация телефона
            if (!ContactValidator.ValidatePhone(request.Phone.Code, request.Phone.Number, out var phoneError))
                return new SendContactResponse { Success = false, Message = phoneError };

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
                Subject = $"Новая заявка от {request.Name}", 
                SubjectEncoding = Encoding.UTF8,
                IsBodyHtml = true
            };

            // Добавление адресов получателей из конфигурации
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

            var htmlBody = FormatEmailBody(request);
            var htmlView = AlternateView.CreateAlternateViewFromString(
                htmlBody,
                Encoding.UTF8,
                System.Net.Mime.MediaTypeNames.Text.Html
            );

            // Yandex требует Base64 для кириллицы
            htmlView.TransferEncoding = System.Net.Mime.TransferEncoding.Base64;
            htmlView.ContentType.CharSet = "utf-8";
            htmlView.ContentType.MediaType = "text/html";

            mailMessage.AlternateViews.Add(htmlView);

            // Отправка email
            await client.SendMailAsync(mailMessage);

            // Отправка лида
            var externalLeadRequest = new ExternalLeadRequest
            {
                FormType = "contact",
                Name = request.Name,
                Phone = $"+{request.Phone?.Code} {request.Phone?.Number}",
                ContactMethod = request.ContactMethod.ToString(),
                ApartmentName = "",
                Email = request.Email,
                Tracking = new Tracking(),
                Ip = ipAddress
            };

            _ = _externalLeadService.SendLead(externalLeadRequest);

            return new SendContactResponse { Success = true };
        }

        /// <summary>
        /// Форматирует тело письма на основе HTML-шаблона или текста по умолчанию.
        /// </summary>
        /// <param name="request">Данные заявки на контакт.</param>
        /// <returns>Строка с HTML или текстовой версией письма.</returns>
        private string FormatEmailBody(SendContactRequest request)
        {
            var filePath = Path.Combine("files", "email-message.html");

            if (!File.Exists(filePath))
                return FormatPlainTextEmail(request);

            var htmlTemplate = File.ReadAllText(filePath, Encoding.UTF8);

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

        /// <summary>
        /// Форматирует простое текстовое письмо, когда HTML шаблон недоступен.
        /// </summary>
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
