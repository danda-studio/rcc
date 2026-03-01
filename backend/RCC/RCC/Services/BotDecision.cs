namespace RCC.Services
{
    public record BotDecision(bool Allowed, bool NeedCaptcha)
    {
        public static BotDecision Allow() => new(true, false);
        public static BotDecision RequireCaptcha() => new(false, true);
        public static BotDecision Block() => new(false, false);
    }

}
