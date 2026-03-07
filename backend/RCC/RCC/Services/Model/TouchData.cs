namespace RCC.Services.Model
{
    /// <summary>
    /// Данные касания пользователя (First Touch или Last Touch).
    /// Содержит урезанную версию данных отслеживания для конкретного момента.
    /// </summary>
    public class TouchData
    {
        /// <summary>
        /// Реферер в момент касания.
        /// </summary>
        public string Referrer { get; set; } = string.Empty;

        /// <summary>
        /// Источник трафика (UTM source) в момент касания.
        /// </summary>
        public string UtmSource { get; set; } = string.Empty;

        /// <summary>
        /// Тип трафика (UTM medium) в момент касания.
        /// </summary>
        public string UtmMedium { get; set; } = string.Empty;

        /// <summary>
        /// Кампания (UTM campaign) в момент касания.
        /// </summary>
        public string UtmCampaign { get; set; } = string.Empty;

        /// <summary>
        /// Контент (UTM content) в момент касания.
        /// </summary>
        public string UtmContent { get; set; } = string.Empty;

        /// <summary>
        /// Ключевое слово (UTM term) в момент касания.
        /// </summary>
        public string UtmTerm { get; set; } = string.Empty;

        /// <summary>
        /// Google Ads click ID в момент касания.
        /// </summary>
        public string Gclid { get; set; } = string.Empty;

        /// <summary>
        /// Facebook click ID в момент касания.
        /// </summary>
        public string Fbclid { get; set; } = string.Empty;

        /// <summary>
        /// Yandex click ID в момент касания.
        /// </summary>
        public string Yclid { get; set; } = string.Empty;

        /// <summary>
        /// TikTok click ID в момент касания.
        /// </summary>
        public string Ttclid { get; set; } = string.Empty;
    }
}
