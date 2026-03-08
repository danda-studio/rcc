namespace RCC.Services
{
    /// <summary>
    /// Представляет решение системы защиты от ботов о допуске или отклонении запроса.
    /// Это record класс, содержащий информацию о статусе запроса и требуемых действиях.
    /// </summary>
    /// <param name="Allowed">Указывает, допущен ли запрос (true) или требуется дополнительная проверка (false).</param>
    /// <param name="NeedCaptcha">Указывает, требуется ли CAPTCHA верификация для этого запроса.</param>
    public record BotDecision(bool Allowed, bool NeedCaptcha)
    {
        /// <summary>
        /// Создаёт решение о допуске запроса.
        /// </summary>
        /// <returns>BotDecision с Allowed=true, NeedCaptcha=false.</returns>
        public static BotDecision Allow() => new(true, false);

        /// <summary>
        /// Создаёт решение о требовании CAPTCHA верификации.
        /// </summary>
        /// <returns>BotDecision с Allowed=false, NeedCaptcha=true.</returns>
        public static BotDecision RequireCaptcha() => new(false, true);

        /// <summary>
        /// Создаёт решение о полной блокировке запроса.
        /// </summary>
        /// <returns>BotDecision с Allowed=false, NeedCaptcha=false.</returns>
        public static BotDecision Block() => new(false, false);
    }
}
