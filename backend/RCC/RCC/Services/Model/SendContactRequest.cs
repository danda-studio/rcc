namespace RCC.Services.Model
{
    /// <summary>
    /// Данные заявки на контакт, которые отправляются через сервис.
    /// </summary>
    public class SendContactRequest
    {
        /// <summary>
        /// Имя клиента, оставившего заявку.
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Телефонные данные клиента.
        /// </summary>
        public Phone Phone { get; set; } = new Phone();

        /// <summary>
        /// Предпочтительный способ связи с клиентом.
        /// </summary>
        public ContactMethod ContactMethod { get; set; }

        /// <summary>
        /// Адрес электронной почты клиента.
        /// </summary>
        public string Email { get; set; } = string.Empty;
    }
}
