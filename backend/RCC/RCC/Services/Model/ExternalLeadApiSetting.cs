ï»¿namespace RCC.Services.Model
{
    /// <summary>
    /// ÐÐ°ÑÑÑÐ¾Ð¹ÐºÐ¸ Ð¿Ð¾Ð´ÐºÐ»ÑÑÐµÐ½Ð¸Ñ Ðº Ð²Ð½ÐµÑÐ½ÐµÐ¼Ñ CRM API.
    /// Ð¡Ð¾Ð´ÐµÑÐ¶Ð¸Ñ URL Ð¸ ÑÐ¾ÐºÐµÐ½ Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸Ð¸ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð»Ð¸Ð´Ð¾Ð².
    /// </summary>
    public class ExternalLeadApiSetting
    {
        /// <summary>
        /// URL endpoint API Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð»Ð¸Ð´Ð¾Ð².
        /// </summary>
        public string Url { get; set; } = string.Empty;

        /// <summary>
        /// Bearer ÑÐ¾ÐºÐµÐ½ Ð´Ð»Ñ Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸Ð¸ Ð¿ÑÐ¸ Ð¾Ð±ÑÐ°ÑÐµÐ½Ð¸Ð¸ Ðº API.
        /// ÐÐµÑÐµÐ´Ð°ÑÑÑÑ Ð² Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐµ: Authorization: Bearer {token}
        /// </summary>
        public string BearerToken { get; set; } = string.Empty;
    }
}
