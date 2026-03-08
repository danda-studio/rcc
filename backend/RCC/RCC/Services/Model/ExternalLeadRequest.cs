ï»¿namespace RCC.Services.Model
{
    /// <summary>
    /// ÐÐ°Ð¿ÑÐ¾Ñ Ð½Ð° Ð¾ÑÐ¿ÑÐ°Ð²ÐºÑ Ð»Ð¸Ð´Ð° (ÐºÐ¾Ð½ÑÐ°ÐºÑÐ½ÑÑ Ð´Ð°Ð½Ð½ÑÑ) Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API.
    /// Ð¡Ð¾Ð´ÐµÑÐ¶Ð¸Ñ Ð²ÑÐµ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼ÑÐµ Ð´Ð°Ð½Ð½ÑÐµ Ð´Ð»Ñ Ð¾Ð±ÑÐ°Ð±Ð¾ÑÐºÐ¸ Ð»Ð¸Ð´Ð° Ð² ÑÐ¸ÑÑÐµÐ¼Ðµ CRM.
    /// </summary>
    public class ExternalLeadRequest
    {
        /// <summary>
        /// Ð¢Ð¸Ð¿ ÑÐ¾ÑÐ¼Ñ, Ð¸Ð· ÐºÐ¾ÑÐ¾ÑÐ¾Ð¹ Ð¿Ð¾ÑÑÑÐ¿Ð¸Ð» Ð»Ð¸Ð´.
        /// ÐÐ¾Ð·Ð¼Ð¾Ð¶Ð½ÑÐµ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ñ: "booking" (Ð±ÑÐ¾Ð½Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ), "contact" (ÐºÐ¾Ð½ÑÐ°ÐºÑ), "callback" (Ð¾Ð±ÑÐ°ÑÐ½ÑÐ¹ Ð·Ð²Ð¾Ð½Ð¾Ðº), "footer" (ÑÐ¾ÑÐ¼Ð° Ð¿Ð¾Ð´Ð²Ð°Ð»Ð°).
        /// </summary>
        public string FormType { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ¼Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ°/Ð»Ð¸Ð´Ð°.
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ¾Ð¼ÐµÑ ÑÐµÐ»ÐµÑÐ¾Ð½Ð° ÐºÐ»Ð¸ÐµÐ½ÑÐ° (Ð² ÑÐ¾ÑÐ¼Ð°ÑÐµ +7 9991234567).
        /// </summary>
        public string Phone { get; set; } = string.Empty;

        /// <summary>
        /// Ð¡Ð¿Ð¾ÑÐ¾Ð± ÑÐ²ÑÐ·Ð¸ Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ¾Ð¼ (Call, WhatsApp, Telegram Ð¸ Ñ.Ð´.).
        /// </summary>
        public string ContactMethod { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð°Ð¿Ð°ÑÑÐ°Ð¼ÐµÐ½ÑÐ°, Ð¾Ð±ÑÐµÐºÑÐ° Ð¸Ð»Ð¸ ÑÑÐ»ÑÐ³Ð¸ (Ð´Ð»Ñ ÑÐ¸Ð¿Ð° ÑÐ¾ÑÐ¼Ñ "booking").
        /// </summary>
        public string ApartmentName { get; set; } = string.Empty;

        /// <summary>
        /// Email Ð°Ð´ÑÐµÑ ÐºÐ»Ð¸ÐµÐ½ÑÐ° (ÐµÑÐ»Ð¸ Ð¿ÑÐµÐ´Ð¾ÑÑÐ°Ð²Ð»ÐµÐ½).
        /// </summary>
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ¾Ð»Ð½ÑÐµ Ð´Ð°Ð½Ð½ÑÐµ Ð¾ÑÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ: UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÑ, ID ÐºÐ»Ð¸ÐºÐ¾Ð², Ð¸Ð½ÑÐ¾ÑÐ¼Ð°ÑÐ¸Ñ Ð¾Ð± ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ðµ Ð¸ Ð±ÑÐ°ÑÐ·ÐµÑÐµ.
        /// </summary>
        public Tracking Tracking { get; set; } = new Tracking();

        /// <summary>
        /// IP Ð°Ð´ÑÐµÑ ÐºÐ»Ð¸ÐµÐ½ÑÐ° (Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÑÑÑ ÑÐµÑÐ²ÐµÑÐ¾Ð¼ Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ðµ Ð·Ð°Ð¿ÑÐ¾ÑÐ°).
        /// GDPR - ÑÑÐµÐ±ÑÐµÑÑÑ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ Ð½Ð° Ð¾Ð±ÑÐ°Ð±Ð¾ÑÐºÑ IP Ð°Ð´ÑÐµÑÐ°.
        /// </summary>
        public string Ip { get; set; } = string.Empty;
    }
}
