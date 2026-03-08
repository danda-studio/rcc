using Microsoft.Extensions.Options;
using RCC.Services.Model;
using System.Text.Json;

namespace RCC.Services
{
    /// <summary>
    /// Сервис для отправки лидов во внешний CRM API.
    /// Отвечает за формирование, сериализацию и отправку контактных данных в систему CRM
    /// с использованием Bearer токена для авторизации.
    /// </summary>
    public class ExternalLeadService : IExternalLeadService
    {
        private readonly HttpClient _httpClient;
        private readonly ExternalLeadApiSetting _settings;
        private readonly ILogger<ExternalLeadService> _logger;

        /// <summary>
        /// Инициализирует новый экземпляр сервиса ExternalLeadService.
        /// </summary>
        /// <param name="httpClient">HTTP клиент для отправки запросов к API.</param>
        /// <param name="settings">Конфигурация CRM API (URL, Bearer токен).</param>
        /// <param name="logger">Логгер для записи событий и ошибок.</param>
        public ExternalLeadService(
            HttpClient httpClient,
            IOptions<ExternalLeadApiSetting> settings,
            ILogger<ExternalLeadService> logger)
        {
            _httpClient = httpClient;
            _settings = settings.Value;
            _logger = logger;
        }

        /// <summary>
        /// Отправляет лид во внешний CRM API.
        /// Включает проверку конфигурации, создание HTTP запроса с Bearer авторизацией,
        /// сериализацию данных в JSON (camelCase) и отправку.
        /// </summary>
        /// <param name="request">Данные лида для отправки.</param>
        /// <returns>true если лид успешно отправлен, false в случае ошибки.</returns>
        public async Task<bool> SendLead(ExternalLeadRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(_settings.Url) || string.IsNullOrWhiteSpace(_settings.BearerToken))
                {
                    _logger.LogWarning("Параметры внешнего CRM API лидов не настроены правильно");
                    return false;
                }

                using var requestMessage = new HttpRequestMessage(HttpMethod.Post, _settings.Url);
                requestMessage.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(
                    "Bearer",
                    _settings.BearerToken);

                // используем camelCase для соответствия CRM API
                var jsonOptions = new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                    WriteIndented = false
                };

                var jsonContent = JsonSerializer.Serialize(request, jsonOptions);
                requestMessage.Content = new StringContent(
                    jsonContent,
                    System.Text.Encoding.UTF8);
                requestMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");

                var response = await _httpClient.SendAsync(requestMessage);

                // Проверка успешности ответа
                if (response.IsSuccessStatusCode)
                {
                    return true;
                }
                else
                {
                    // Логирование ошибки с деталями ответа
                    var errorContent = await response.Content.ReadAsStringAsync();
                    _logger.LogError(
                        $"Ошибка при отправке лида во внешний CRM API. HTTP статус: {response.StatusCode}, Ответ: {errorContent}");
                    return false;
                }
            }
            catch (Exception ex)
            {
                // Логирование неожиданного исключения
                _logger.LogError($"Исключение при отправке лида во внешний CRM API: {ex.Message}", ex);
                return false;
            }
        }
    }
}
