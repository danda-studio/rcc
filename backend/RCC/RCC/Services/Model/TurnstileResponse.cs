namespace RCC.Services.Model
{
    /// <summary>
    /// Ответ от Cloudflare Turnstile API при проверке CAPTCHA токена.
    /// Содержит результат верификации.
    /// </summary>
    public class TurnstileResponse
    {
        /// <summary>
        /// Указывает, успешно ли был верифицирован CAPTCHA токен.
        /// true - токен валиден, пользователь прошёл верификацию.
        /// false - токен невалиден, истёк, или произошла ошибка.
        /// </summary>
        public bool Success { get; set; }
    }
}
