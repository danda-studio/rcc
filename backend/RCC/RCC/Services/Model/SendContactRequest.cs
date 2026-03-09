namespace RCC.Services.Model
{
    /// <summary>
    /// Данные заявки на контакт, которые отправляются через сервис.
    /// Используется как входящий параметр для обработки контактных форм.
    /// </summary>
    public class SendContactRequest
    {
        /// <summary>
        /// Имя клиента, оставившего заявку.
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Телефонные данные клиента (код страны и номер).
        /// </summary>
        public Phone Phone { get; set; } = new Phone();

        /// <summary>
        /// Предпочтительный способ связи с клиентом (звонок, WhatsApp, Telegram и т.д.).
        /// </summary>
        public ContactMethod ContactMethod { get; set; }

        /// <summary>
        /// Адрес электронной почты клиента.
        /// </summary>
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// Капча и данные защиты от ботов.
        /// </summary>
        public AntiBot? AntiBotDetails { get; set; }

        public Tracking? Tracking { get; set; } 

    }
}
