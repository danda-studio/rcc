namespace RCC.Services
{
    /// <summary>
    /// Интерфейс сервиса для верификации пользователя через Cloudflare Turnstile CAPTCHA.
    /// Определяет контракт для проверки CAPTCHA токенов от клиента.
    /// </summary>
    public interface ITurnstileService
    {
        /// <summary>
        /// Верифицирует CAPTCHA токен через Cloudflare Turnstile API.
        /// </summary>
        /// <param name="token">CAPTCHA токен, полученный от клиента после прохождения Turnstile челленджа.</param>
        /// <param name="ip">IP адрес клиента для дополнительной проверки и логирования.</param>
        /// <returns>
        /// Асинхронно возвращает true если токен валиден и прошёл проверку на Cloudflare,
        /// false если токен невалиден, истёк срок действия или произошла ошибка.
        /// </returns>
        Task<bool> VerifyUser(string token, string ip);
    }
}
