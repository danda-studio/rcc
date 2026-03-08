using RCC.Services.Model;
using System.Text.Json;

namespace RCC.Services
{
    /// <summary>
    /// Реализация сервиса верификации пользователя через Cloudflare Turnstile CAPTCHA.
    /// Отправляет CAPTCHA токены на проверку серверам Cloudflare.
    /// </summary>
    public class TurnstileService : ITurnstileService
    {
        /// <summary>
        /// HTTP клиент для отправки запросов к Cloudflare API.
        /// </summary>
        private readonly HttpClient _http;

        /// <summary>
        /// Секретный ключ Turnstile для верификации токенов.
        /// Получается из конфигурации приложения.
        /// </summary>
        private readonly string _secret;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="TurnstileService"/>.
        /// </summary>
        /// <param name="http">HTTP клиент для отправки запросов (внедряется через DI).</param>
        /// <param name="config">Конфигурация приложения для получения секретного ключа.</param>
        public TurnstileService(HttpClient http, IConfiguration config)
        {
            _http = http;
            _secret = config["Turnstile:SecretKey"];
        }

        /// <summary>
        /// Верифицирует CAPTCHA токен через Cloudflare Turnstile API.
        /// </summary>
        /// <param name="token">CAPTCHA токен от клиента.</param>
        /// <param name="ip">IP адрес клиента.</param>
        /// <returns>
        /// Асинхронно возвращает true если токен валиден, false в противном случае.
        /// </returns>
        public async Task<bool> VerifyUser(string token, string ip)
        {
            var response = await _http.PostAsync(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                new FormUrlEncodedContent(new Dictionary<string, string>
                {
                    ["secret"] = _secret,
                    ["response"] = token,
                    ["remoteip"] = ip
                })
            );

            var json = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<TurnstileResponse>(json);

            return result?.Success == true;
        }
    }
}
