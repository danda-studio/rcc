using Microsoft.Extensions.Options;
using RCC.Services.Model;
using RCC.Validator;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace RCC.Services
{
    /// <summary>
    /// Ð¡ÐµÑÐ²Ð¸Ñ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ ÐºÐ¾Ð½ÑÐ°ÐºÑÐ½ÑÑ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹ Ð¸ Ð»Ð¸Ð´Ð¾Ð².
    /// ÐÑÐ²ÐµÑÐ°ÐµÑ Ð·Ð° Ð²Ð°Ð»Ð¸Ð´Ð°ÑÐ¸Ñ Ð´Ð°Ð½Ð½ÑÑ, Ð¾ÑÐ¿ÑÐ°Ð²ÐºÑ email Ð¸ Ð¿ÐµÑÐµÐ´Ð°ÑÑ Ð´Ð°Ð½Ð½ÑÑ Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API.
    /// </summary>
    public class ContactService : IContactService
    {
        private readonly EmailSetting _emailSetting;
        private readonly IExternalLeadService _externalLeadService;

        /// <summary>
        /// Èíèöèàëèçèðóåò íîâûé ýêçåìïëÿð <see cref="ContactService"/>.
        /// </summary>
        /// <param name="emailSetting">ÐÐ°ÑÑÑÐ¾Ð¹ÐºÐ¸ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð¿Ð¸ÑÐµÐ¼ (SMTP, Ð¾Ñ ÐºÐ¾Ð³Ð¾, ÐºÐ¾Ð¼Ñ).</param>
        /// <param name="externalLeadService">Ð¡ÐµÑÐ²Ð¸Ñ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð»Ð¸Ð´Ð¾Ð² Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API.</param>
        public ContactService(
            IOptions<EmailSetting> emailSetting,
            IExternalLeadService externalLeadService)
        {
            _emailSetting = emailSetting.Value;
            _externalLeadService = externalLeadService;
        }

        /// <summary>
        /// ÐÑÐ¿ÑÐ°Ð²Ð»ÑÐµÑ ÐºÐ¾Ð½ÑÐ°ÐºÑÐ½Ð¾Ðµ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ Ð½Ð° ÑÐºÐ°Ð·Ð°Ð½Ð½ÑÐµ Ð°Ð´ÑÐµÑÐ° ÑÐ»ÐµÐºÑÑÐ¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾ÑÑÑ Ð¸ Ð¿ÐµÑÐµÐ´Ð°ÑÑ Ð»Ð¸Ð´ Ð² CRM API.
        /// </summary>
        /// <param name="request">ÐÐ°Ð½Ð½ÑÐµ Ð·Ð°ÑÐ²ÐºÐ¸ Ð½Ð° ÐºÐ¾Ð½ÑÐ°ÐºÑ (Ñ ÑÑÐ¾Ð½ÑÐµÐ½Ð´Ð°).</param>
        /// <param name="ipAddress">IP Ð°Ð´ÑÐµÑ ÐºÐ»Ð¸ÐµÐ½ÑÐ° (Ð¸Ð·Ð²Ð»ÐµÐºÐ°ÐµÑÑÑ Ñ ÑÐµÑÐ²ÐµÑÐ°).</param>
        /// <returns>ÐÐ±ÑÐµÐºÑ <see cref="SendContactResponse"/> Ñ ÑÐµÐ·ÑÐ»ÑÑÐ°ÑÐ¾Ð¼ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸.</returns>
        public async Task<SendContactResponse> SendContact(SendContactRequest request, string ipAddress = "")
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };

            // if (!ContactValidator.ValidateEmail(request.Email, out var emailError))
            //     return new SendContactResponse { Success = false, Message = emailError };

            // Âàëèäàöèÿ òåëåôîíà
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
                Subject = $"New Contact Request from {request.Name}",
                Body = FormatEmailBody(request),
                IsBodyHtml = true,
                BodyEncoding = Encoding.UTF8,
                SubjectEncoding = Encoding.UTF8
            };

            // ÐÐ¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð°Ð´ÑÐµÑÐ¾Ð² Ð¿Ð¾Ð»ÑÑÐ°ÑÐµÐ»ÐµÐ¹ Ð¸Ð· ÐºÐ¾Ð½ÑÐ¸Ð³ÑÑÐ°ÑÐ¸Ð¸
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

            // ÐÑÐ¿ÑÐ°Ð²ÐºÐ° email
            await client.SendMailAsync(mailMessage);

            // ÐÑÐ¿ÑÐ°Ð²ÐºÐ° Ð»Ð¸Ð´Ð°
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
        /// Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÑÐµÑ ÑÐµÐ»Ð¾ Ð¿Ð¸ÑÑÐ¼Ð° Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ HTML-ÑÐ°Ð±Ð»Ð¾Ð½Ð° Ð¸Ð»Ð¸ ÑÐµÐºÑÑÐ° Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ.
        /// </summary>
        /// <param name="request">Äàííûå çàÿâêè íà êîíòàêò.</param>
        /// <returns>Ñòðîêà ñ HTML èëè òåêñòîâîé âåðñèåé ïèñüìà.</returns>
        private string FormatEmailBody(SendContactRequest request)
        {
            var filePath = Path.Combine("files", "email-message.html");

            if (!File.Exists(filePath))
                return FormatPlainTextEmail(request);

            var htmlTemplate = File.ReadAllText(filePath, Encoding.UTF8);

            string contactMethodText = request.ContactMethod switch
            {
                ContactMethod.Call => "Çâîíîê",
                ContactMethod.WhatsApp => "WhatsApp",
                ContactMethod.Telegram => "Telegram",
                _ => "Íå óêàçàí"
            };

            // Çàìåíÿåì ïëåéñõîëäåðû íà ðåàëüíûå äàííûå
            return htmlTemplate
                .Replace("{{NAME}}", request.Name)
                .Replace("{{PHONE}}", $"+{request.Phone?.Code} {request.Phone?.Number}")
                .Replace("{{CONTACT_METHOD}}", contactMethodText)
                .Replace("{{EMAIL}}", request.Email)
                .Replace("{{DATE}}", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
        }

        /// <summary>
        /// Ð¤Ð¾ÑÐ¼Ð°ÑÐ¸ÑÑÐµÑ Ð¿ÑÐ¾ÑÑÐ¾Ðµ ÑÐµÐºÑÑÐ¾Ð²Ð¾Ðµ Ð¿Ð¸ÑÑÐ¼Ð¾, ÐºÐ¾Ð³Ð´Ð° HTML ÑÐ°Ð±Ð»Ð¾Ð½ Ð½ÐµÐ´Ð¾ÑÑÑÐ¿ÐµÐ½.
        /// </summary>
        private static string FormatPlainTextEmail(SendContactRequest request)
        {
            return $@"
            Íîâàÿ çàÿâêà
            -------------------
            Èìÿ: {request.Name}
            Email: {request.Email}
            Íîìåð òåëåôîíà: +{request.Phone?.Code} {request.Phone?.Number}
            Ñïîñîá ñâÿçè ñ êëèåíòîì: {request.ContactMethod}
            -------------------
            Äàòà çàÿâêè: {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
        }

    }
}
