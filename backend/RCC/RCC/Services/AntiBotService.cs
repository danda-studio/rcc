using RCC.Services.Model;

namespace RCC.Services
{
    /// <summary>
    /// Реализация сервиса проверки активности пользователя для защиты от ботов и спама.
    /// Использует многоуровневую защиту: honeypot, поведенческий анализ и CAPTCHA.
    /// </summary>
    public class AntiBotService : IAntiBotService
    {
        /// <summary>
        /// Сервис для верификации CAPTCHA токенов Cloudflare Turnstile.
        /// </summary>
        private readonly ITurnstileService _turnstile;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="AntiBotService"/>.
        /// </summary>
        /// <param name="turnstile">Сервис верификации Turnstile (внедряется через DI).</param>
        public AntiBotService(ITurnstileService turnstile)
        {
            _turnstile = turnstile;
        }

        /// <summary>
        /// Проверяет является ли пользователь потенциальным ботом используя многоуровневую защиту.
        /// </summary>
        /// <param name="r">Данные контактной заявки с информацией об антибот-защите.</param>
        /// <param name="ip">IP адрес клиента для передачи в CAPTCHA верификацию.</param>
        /// <returns>
        /// Асинхронно возвращает <see cref="BotDecision"/> с решением:
        /// - <see cref="BotDecision.Allow()"/> если пользователь прошёл все проверки
        /// - <see cref="BotDecision.RequireCaptcha()"/> если требуется дополнительная CAPTCHA верификация
        /// - <see cref="BotDecision.Block()"/> если запрос был заблокирован
        /// </returns>
        public async Task<BotDecision> CheckUser(SendContactRequest r, string ip)
        {
            var antiBot = new AntiBot
            {
                Company = r.AntiBotDetails.Company,
                FormStart = r.AntiBotDetails.FormStart,
                InteractionScore = r.AntiBotDetails.InteractionScore,
                CaptchaToken = r.AntiBotDetails.CaptchaToken,
            };

            // Honeypot - скрытое поле для ловли ботов
            if (!string.IsNullOrWhiteSpace(antiBot.Company))
                return BotDecision.Block();

            // Поведенческий анализ - проверка времени и взаимодействий
            var elapsed = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() - antiBot.FormStart;

            var suspicious =
                elapsed < 2500 ||  // Менее 2.5 секунд - подозрительно (бот работает быстро)
                antiBot.InteractionScore < 1;  // Нет взаимодействий - подозрительно

            if (!suspicious)
                return BotDecision.Allow();

            // CAPTCHA - если поведение подозрительно, требуем CAPTCHA
            if (string.IsNullOrEmpty(antiBot.CaptchaToken))
                return BotDecision.RequireCaptcha();

            // Верификация CAPTCHA токена
            var ok = await _turnstile.VerifyUser(antiBot.CaptchaToken, ip);

            return ok
                ? BotDecision.Allow()
                : BotDecision.Block();
        }
    }
}
