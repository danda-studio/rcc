namespace RCC.Services.Model
{
    /// <summary>
    /// Настройки подключения к внешнему CRM API.
    /// Содержит URL и токен авторизации для отправки лидов.
    /// </summary>
    public class ExternalLeadApiSetting
    {
        /// <summary>
        /// URL endpoint API для отправки лидов.
        /// </summary>
        public string Url { get; set; } = string.Empty;

        /// <summary>
        /// Bearer токен для авторизации при обращении к API.
        /// Передаётся в заголовке: Authorization: Bearer {token}
        /// </summary>
        public string BearerToken { get; set; } = string.Empty;
    }
}
