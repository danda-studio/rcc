using RCC.Services.Model;

namespace RCC.Services
{
    public class AntiBotService : IAntiBotService
    {
        private readonly ITurnstileService _turnstile;

        public AntiBotService(ITurnstileService turnstile)
        {
            _turnstile = turnstile;
        }

        public async Task<BotDecision> CheckUser(SendContactRequest r, string ip)
        {
            var antiBot = new AntiBot
            {
                Company = r.AntiBotDetails.Company,
                FormStart = r.AntiBotDetails.FormStart,
                InteractionScore = r.AntiBotDetails.InteractionScore,
                CaptchaToken = r.AntiBotDetails.CaptchaToken,
            };

            // Honeypot
            if (!string.IsNullOrWhiteSpace(antiBot.Company))
                return BotDecision.Block();

            // Поведение
            var elapsed = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() - antiBot.FormStart;

            var suspicious =
                elapsed < 2500 ||
                antiBot.InteractionScore < 1;

            if (!suspicious)
                return BotDecision.Allow();

            // Капча
            if (string.IsNullOrEmpty(antiBot.CaptchaToken))
                return BotDecision.RequireCaptcha();

            // Проверяем капчу
            var ok = await _turnstile.VerifyUser(antiBot.CaptchaToken, ip);

            return ok
                ? BotDecision.Allow()
                : BotDecision.Block();
        }
    }

}
