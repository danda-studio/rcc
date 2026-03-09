namespace RCC.Services.Model
{
    /// <summary>
    /// Данные отслеживания пользователя из браузера и сервера.
    /// Содержит информацию об источнике трафика, параметры устройства и браузера.
    /// </summary>
    public class Tracking
    {
        /// <summary>
        /// Реферер (источник перехода).
        /// </summary>
        public string? Referrer { get; set; } = string.Empty;

        /// <summary>
        /// Источник трафика (UTM параметр: google, yandex, facebook и т.д.).
        /// </summary>
        public string UtmSource { get; set; } = string.Empty;

        /// <summary>
        /// Тип/канал трафика (UTM параметр: cpc, organic, email и т.д.).
        /// </summary>
        public string UtmMedium { get; set; } = string.Empty;

        /// <summary>
        /// Название маркетинговой кампании (UTM параметр).
        /// </summary>
        public string UtmCampaign { get; set; } = string.Empty;

        /// <summary>
        /// Контент/вариант объявления (UTM параметр).
        /// </summary>
        public string UtmContent { get; set; } = string.Empty;

        /// <summary>
        /// Ключевое слово в кампании (UTM параметр, для платного поиска).
        /// </summary>
        public string UtmTerm { get; set; } = string.Empty;

        /// <summary>
        /// ID клика из Google Ads.
        /// </summary>
        public string Gclid { get; set; } = string.Empty;

        /// <summary>
        /// ID клика из Facebook Ads.
        /// </summary>
        public string Fbclid { get; set; } = string.Empty;

        /// <summary>
        /// ID клика из Яндекс.Директ.
        /// </summary>
        public string Yclid { get; set; } = string.Empty;

        /// <summary>
        /// ID клика из TikTok.
        /// </summary>
        public string Ttclid { get; set; } = string.Empty;

        /// <summary>
        /// Общий ID клика (может использоваться для других платформ).
        /// </summary>
        public string ClickId { get; set; } = string.Empty;

        /// <summary>
        /// Данные первого касания (first touch) - откуда пришёл пользователь в первый раз.
        /// </summary>
        public TouchData FirstTouch { get; set; } = new TouchData();

        /// <summary>
        /// Данные последнего касания (last touch) - откуда пришёл непосредственно перед конверсией.
        /// </summary>
        public TouchData LastTouch { get; set; } = new TouchData();

        /// <summary>
        /// User Agent браузера (полная информация о браузере и ОС).
        /// </summary>
        public string? UserAgent { get; set; } = string.Empty;

        /// <summary>
        /// Языки браузера (Accept-Language заголовок).
        /// </summary>
        public string? AcceptLanguage { get; set; } = string.Empty;

        /// <summary>
        /// Смещение часового пояса в минутах от UTC (например, -180 для MSK).
        /// </summary>
        public int TimezoneOffset { get; set; }

        /// <summary>
        /// Ширина экрана устройства в пикселях.
        /// </summary>
        public int ScreenW { get; set; }

        /// <summary>
        /// Высота экрана устройства в пикселях.
        /// </summary>
        public int ScreenH { get; set; }

        /// <summary>
        /// Ширина viewport браузера в пикселях.
        /// </summary>
        public int ViewportW { get; set; }

        /// <summary>
        /// Высота viewport браузера в пикселях.
        /// </summary>
        public int ViewportH { get; set; }

        /// <summary>
        /// Коэффициент плотности пикселей (для Retina дисплеев обычно 2.0).
        /// </summary>
        public double DevicePixelRatio { get; set; }

        /// <summary>
        /// Название операционной системы (Windows, macOS, Linux, iOS, Android и т.д.).
        /// </summary>
        public string Platform { get; set; } = string.Empty;

        /// <summary>
        /// Флаг, указывающий является ли устройство мобильным.
        /// </summary>
        public bool Mobile { get; set; }

        /// <summary>
        /// Архитектура процессора (x86, x64, ARM и т.д.).
        /// </summary>
        public string Architecture { get; set; } = string.Empty;
    }
}
