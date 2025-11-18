namespace RCC.Services.Model
{
    /// <summary>
    /// Ответ с информацией о коде страны и формате номера телефона.
    /// </summary>
    public class CountryCodeResponse
    {
        /// <summary>
        /// Регион или континент, к которому относится страна.
        /// </summary>
        public string Region { get; set; } = string.Empty;

        /// <summary>
        /// Телефонный код страны (например, "7" для России).
        /// </summary>
        public string CountryPhoneCode { get; set; } = string.Empty;

        /// <summary>
        /// Название страны.
        /// </summary>
        public string CountryName { get; set; } = string.Empty;

        /// <summary>
        /// Маска телефонного номера для данной страны.
        /// </summary>
        public string Mask { get; set; } = string.Empty;
    }
}
