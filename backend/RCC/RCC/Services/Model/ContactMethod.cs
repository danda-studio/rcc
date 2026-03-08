namespace RCC.Services.Model
{
    /// <summary>
    /// Перечисление предпочтительных способов связи с клиентом.
    /// Используется для указания канала коммуникации при обработке контактных заявок.
    /// </summary>
    public enum ContactMethod
    {
        /// <summary>
        /// Предпочтение: связь по телефону (звонок).
        /// </summary>
        Call = 0,

        /// <summary>
        /// Предпочтение: связь через мессенджер WhatsApp.
        /// </summary>
        WhatsApp = 1,

        /// <summary>
        /// Предпочтение: связь через мессенджер Telegram.
        /// </summary>
        Telegram = 2
    }
}
