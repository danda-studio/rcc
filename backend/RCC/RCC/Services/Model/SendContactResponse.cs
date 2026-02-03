namespace RCC.Services.Model
{
    /// <summary>
    /// Ответ сервиса после попытки отправки контактного сообщения.
    /// </summary>
    public class SendContactResponse
    {
        /// <summary>
        /// Указывает, успешно ли прошло отправление письма.
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// Сообщение с подробностями результата отправки или текст ошибки.
        /// </summary>
        public string Message { get; set; } = string.Empty;
    }
}
