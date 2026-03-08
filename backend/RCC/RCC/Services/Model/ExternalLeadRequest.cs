namespace RCC.Services.Model
{
    /// <summary>
    /// Запрос на отправку лида (контактных данных) во внешний CRM API.
    /// Содержит все необходимые данные для обработки лида в системе CRM.
    /// </summary>
    public class ExternalLeadRequest
    {
        /// <summary>
        /// Тип формы, из которой поступил лид.
        /// Возможные значения: "booking" (бронирование), "contact" (контакт), "callback" (обратный звонок), "footer" (форма подвала).
        /// </summary>
        public string FormType { get; set; } = string.Empty;

        /// <summary>
        /// Имя клиента/лида.
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Номер телефона клиента (в формате +7 9991234567).
        /// </summary>
        public string Phone { get; set; } = string.Empty;

        /// <summary>
        /// Способ связи с клиентом (Call, WhatsApp, Telegram и т.д.).
        /// </summary>
        public string ContactMethod { get; set; } = string.Empty;

        /// <summary>
        /// Название апартамента, объекта или услуги (для типа формы "booking").
        /// </summary>
        public string ApartmentName { get; set; } = string.Empty;

        /// <summary>
        /// Email адрес клиента (если предоставлен).
        /// </summary>
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// Полные данные отслеживания: UTM параметры, ID кликов, информация об устройстве и браузере.
        /// </summary>
        public Tracking Tracking { get; set; } = new Tracking();

        /// <summary>
        /// IP адрес клиента (добавляется сервером на основе запроса).
        /// GDPR - требуется согласие пользователя на обработку IP адреса.
        /// </summary>
        public string Ip { get; set; } = string.Empty;
    }
}
