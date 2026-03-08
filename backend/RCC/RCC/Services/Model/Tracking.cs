ï»¿namespace RCC.Services.Model
{
    /// <summary>
    /// ÐÐ°Ð½Ð½ÑÐµ Ð¾ÑÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ Ð¸Ð· Ð±ÑÐ°ÑÐ·ÐµÑÐ° Ð¸ ÑÐµÑÐ²ÐµÑÐ°.
    /// Ð¡Ð¾Ð´ÐµÑÐ¶Ð¸Ñ Ð¸Ð½ÑÐ¾ÑÐ¼Ð°ÑÐ¸Ñ Ð¾Ð± Ð¸ÑÑÐ¾ÑÐ½Ð¸ÐºÐµ ÑÑÐ°ÑÐ¸ÐºÐ°, Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÑ ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð° Ð¸ Ð±ÑÐ°ÑÐ·ÐµÑÐ°.
    /// </summary>
    public class Tracking
    {
        /// <summary>
        /// Ð ÐµÑÐµÑÐµÑ (Ð¸ÑÑÐ¾ÑÐ½Ð¸Ðº Ð¿ÐµÑÐµÑÐ¾Ð´Ð°).
        /// </summary>
        public string Referrer { get; set; } = string.Empty;

        /// <summary>
        /// ÐÑÑÐ¾ÑÐ½Ð¸Ðº ÑÑÐ°ÑÐ¸ÐºÐ° (UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ: google, yandex, facebook Ð¸ Ñ.Ð´.).
        /// </summary>
        public string UtmSource { get; set; } = string.Empty;

        /// <summary>
        /// Ð¢Ð¸Ð¿/ÐºÐ°Ð½Ð°Ð» ÑÑÐ°ÑÐ¸ÐºÐ° (UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ: cpc, organic, email Ð¸ Ñ.Ð´.).
        /// </summary>
        public string UtmMedium { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¼Ð°ÑÐºÐµÑÐ¸Ð½Ð³Ð¾Ð²Ð¾Ð¹ ÐºÐ°Ð¼Ð¿Ð°Ð½Ð¸Ð¸ (UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ).
        /// </summary>
        public string UtmCampaign { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ¾Ð½ÑÐµÐ½Ñ/Ð²Ð°ÑÐ¸Ð°Ð½Ñ Ð¾Ð±ÑÑÐ²Ð»ÐµÐ½Ð¸Ñ (UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ).
        /// </summary>
        public string UtmContent { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ»ÑÑÐµÐ²Ð¾Ðµ ÑÐ»Ð¾Ð²Ð¾ Ð² ÐºÐ°Ð¼Ð¿Ð°Ð½Ð¸Ð¸ (UTM Ð¿Ð°ÑÐ°Ð¼ÐµÑÑ, Ð´Ð»Ñ Ð¿Ð»Ð°ÑÐ½Ð¾Ð³Ð¾ Ð¿Ð¾Ð¸ÑÐºÐ°).
        /// </summary>
        public string UtmTerm { get; set; } = string.Empty;

        /// <summary>
        /// ID ÐºÐ»Ð¸ÐºÐ° Ð¸Ð· Google Ads.
        /// </summary>
        public string Gclid { get; set; } = string.Empty;

        /// <summary>
        /// ID ÐºÐ»Ð¸ÐºÐ° Ð¸Ð· Facebook Ads.
        /// </summary>
        public string Fbclid { get; set; } = string.Empty;

        /// <summary>
        /// ID ÐºÐ»Ð¸ÐºÐ° Ð¸Ð· Ð¯Ð½Ð´ÐµÐºÑ.ÐÐ¸ÑÐµÐºÑ.
        /// </summary>
        public string Yclid { get; set; } = string.Empty;

        /// <summary>
        /// ID ÐºÐ»Ð¸ÐºÐ° Ð¸Ð· TikTok.
        /// </summary>
        public string Ttclid { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ±ÑÐ¸Ð¹ ID ÐºÐ»Ð¸ÐºÐ° (Ð¼Ð¾Ð¶ÐµÑ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÑÑÑ Ð´Ð»Ñ Ð´ÑÑÐ³Ð¸Ñ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼).
        /// </summary>
        public string ClickId { get; set; } = string.Empty;

        /// <summary>
        /// ÐÐ°Ð½Ð½ÑÐµ Ð¿ÐµÑÐ²Ð¾Ð³Ð¾ ÐºÐ°ÑÐ°Ð½Ð¸Ñ (first touch) - Ð¾ÑÐºÑÐ´Ð° Ð¿ÑÐ¸ÑÑÐ» Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ Ð² Ð¿ÐµÑÐ²ÑÐ¹ ÑÐ°Ð·.
        /// </summary>
        public TouchData FirstTouch { get; set; } = new TouchData();

        /// <summary>
        /// ÐÐ°Ð½Ð½ÑÐµ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐ³Ð¾ ÐºÐ°ÑÐ°Ð½Ð¸Ñ (last touch) - Ð¾ÑÐºÑÐ´Ð° Ð¿ÑÐ¸ÑÑÐ» Ð½ÐµÐ¿Ð¾ÑÑÐµÐ´ÑÑÐ²ÐµÐ½Ð½Ð¾ Ð¿ÐµÑÐµÐ´ ÐºÐ¾Ð½Ð²ÐµÑÑÐ¸ÐµÐ¹.
        /// </summary>
        public TouchData LastTouch { get; set; } = new TouchData();

        /// <summary>
        /// User Agent Ð±ÑÐ°ÑÐ·ÐµÑÐ° (Ð¿Ð¾Ð»Ð½Ð°Ñ Ð¸Ð½ÑÐ¾ÑÐ¼Ð°ÑÐ¸Ñ Ð¾ Ð±ÑÐ°ÑÐ·ÐµÑÐµ Ð¸ ÐÐ¡).
        /// </summary>
        public string UserAgent { get; set; } = string.Empty;

        /// <summary>
        /// Ð¯Ð·ÑÐºÐ¸ Ð±ÑÐ°ÑÐ·ÐµÑÐ° (Accept-Language Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº).
        /// </summary>
        public string AcceptLanguage { get; set; } = string.Empty;

        /// <summary>
        /// Ð¡Ð¼ÐµÑÐµÐ½Ð¸Ðµ ÑÐ°ÑÐ¾Ð²Ð¾Ð³Ð¾ Ð¿Ð¾ÑÑÐ° Ð² Ð¼Ð¸Ð½ÑÑÐ°Ñ Ð¾Ñ UTC (Ð½Ð°Ð¿ÑÐ¸Ð¼ÐµÑ, -180 Ð´Ð»Ñ MSK).
        /// </summary>
        public int TimezoneOffset { get; set; }

        /// <summary>
        /// Ð¨Ð¸ÑÐ¸Ð½Ð° ÑÐºÑÐ°Ð½Ð° ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð° Ð² Ð¿Ð¸ÐºÑÐµÐ»ÑÑ.
        /// </summary>
        public int ScreenW { get; set; }

        /// <summary>
        /// ÐÑÑÐ¾ÑÐ° ÑÐºÑÐ°Ð½Ð° ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð° Ð² Ð¿Ð¸ÐºÑÐµÐ»ÑÑ.
        /// </summary>
        public int ScreenH { get; set; }

        /// <summary>
        /// Ð¨Ð¸ÑÐ¸Ð½Ð° viewport Ð±ÑÐ°ÑÐ·ÐµÑÐ° Ð² Ð¿Ð¸ÐºÑÐµÐ»ÑÑ.
        /// </summary>
        public int ViewportW { get; set; }

        /// <summary>
        /// ÐÑÑÐ¾ÑÐ° viewport Ð±ÑÐ°ÑÐ·ÐµÑÐ° Ð² Ð¿Ð¸ÐºÑÐµÐ»ÑÑ.
        /// </summary>
        public int ViewportH { get; set; }

        /// <summary>
        /// ÐÐ¾ÑÑÑÐ¸ÑÐ¸ÐµÐ½Ñ Ð¿Ð»Ð¾ÑÐ½Ð¾ÑÑÐ¸ Ð¿Ð¸ÐºÑÐµÐ»ÐµÐ¹ (Ð´Ð»Ñ Retina Ð´Ð¸ÑÐ¿Ð»ÐµÐµÐ² Ð¾Ð±ÑÑÐ½Ð¾ 2.0).
        /// </summary>
        public double DevicePixelRatio { get; set; }

        /// <summary>
        /// ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¾Ð¿ÐµÑÐ°ÑÐ¸Ð¾Ð½Ð½Ð¾Ð¹ ÑÐ¸ÑÑÐµÐ¼Ñ (Windows, macOS, Linux, iOS, Android Ð¸ Ñ.Ð´.).
        /// </summary>
        public string Platform { get; set; } = string.Empty;

        /// <summary>
        /// Ð¤Ð»Ð°Ð³, ÑÐºÐ°Ð·ÑÐ²Ð°ÑÑÐ¸Ð¹ ÑÐ²Ð»ÑÐµÑÑÑ Ð»Ð¸ ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð¾ Ð¼Ð¾Ð±Ð¸Ð»ÑÐ½ÑÐ¼.
        /// </summary>
        public bool Mobile { get; set; }

        /// <summary>
        /// ÐÑÑÐ¸ÑÐµÐºÑÑÑÐ° Ð¿ÑÐ¾ÑÐµÑÑÐ¾ÑÐ° (x86, x64, ARM Ð¸ Ñ.Ð´.).
        /// </summary>
        public string Architecture { get; set; } = string.Empty;
    }
}
