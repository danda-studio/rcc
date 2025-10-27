namespace RCC.Services.Model
{
    /// <summary>
    /// Информация о телефонном номере клиента.
    /// </summary>
    public class Phone
    {
        /// <summary>
        /// Код страны или региона (например, 7 для России).
        /// </summary>
        public string Code { get; set; } = string.Empty;

        /// <summary>
        /// Основной номер телефона клиента.
        /// </summary>
        public string Number { get; set; } = string.Empty;
    }
}
