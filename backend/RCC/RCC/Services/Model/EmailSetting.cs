namespace RCC.Services.Model
{
    /// <summary>
    /// Настройки для отправки электронной почты через SMTP.
    /// </summary>
    public class EmailSetting
    {
        /// <summary>
        /// Адрес SMTP-сервера.
        /// </summary>
        public string SmtpServer { get; set; } = string.Empty;

        /// <summary>
        /// Порт SMTP-сервера.
        /// </summary>
        public int SmtpPort { get; set; }

        /// <summary>
        /// Электронная почта отправителя.
        /// </summary>
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// Пароль от электронной почты отправителя.
        /// </summary>
        public string Password { get; set; } = string.Empty;

        /// <summary>
        /// Список получателей письма.
        /// </summary>
        public List<string> Recipients { get; set; } = new List<string>();
    }
}
