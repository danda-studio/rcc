ï»¿using Microsoft.Extensions.Options;
using RCC.Services.Model;
using System.Text.Json;

namespace RCC.Services
{
    /// <summary>
    /// Ð¡ÐµÑÐ²Ð¸Ñ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð»Ð¸Ð´Ð¾Ð² Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API.
    /// ÐÑÐ²ÐµÑÐ°ÐµÑ Ð·Ð° ÑÐ¾ÑÐ¼Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ, ÑÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ Ð¸ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÑ ÐºÐ¾Ð½ÑÐ°ÐºÑÐ½ÑÑ Ð´Ð°Ð½Ð½ÑÑ Ð² ÑÐ¸ÑÑÐµÐ¼Ñ CRM
    /// Ñ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°Ð½Ð¸ÐµÐ¼ Bearer ÑÐ¾ÐºÐµÐ½Ð° Ð´Ð»Ñ Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸Ð¸.
    /// </summary>
    public class ExternalLeadService : IExternalLeadService
    {
        private readonly HttpClient _httpClient;
        private readonly ExternalLeadApiSetting _settings;
        private readonly ILogger<ExternalLeadService> _logger;

        /// <summary>
        /// ÐÐ½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÑÐµÑ Ð½Ð¾Ð²ÑÐ¹ ÑÐºÐ·ÐµÐ¼Ð¿Ð»ÑÑ ÑÐµÑÐ²Ð¸ÑÐ° ExternalLeadService.
        /// </summary>
        /// <param name="httpClient">HTTP ÐºÐ»Ð¸ÐµÐ½Ñ Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð·Ð°Ð¿ÑÐ¾ÑÐ¾Ð² Ðº API.</param>
        /// <param name="settings">ÐÐ¾Ð½ÑÐ¸Ð³ÑÑÐ°ÑÐ¸Ñ CRM API (URL, Bearer ÑÐ¾ÐºÐµÐ½).</param>
        /// <param name="logger">ÐÐ¾Ð³Ð³ÐµÑ Ð´Ð»Ñ Ð·Ð°Ð¿Ð¸ÑÐ¸ ÑÐ¾Ð±ÑÑÐ¸Ð¹ Ð¸ Ð¾ÑÐ¸Ð±Ð¾Ðº.</param>
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
        /// ÐÑÐ¿ÑÐ°Ð²Ð»ÑÐµÑ Ð»Ð¸Ð´ Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API.
        /// ÐÐºÐ»ÑÑÐ°ÐµÑ Ð¿ÑÐ¾Ð²ÐµÑÐºÑ ÐºÐ¾Ð½ÑÐ¸Ð³ÑÑÐ°ÑÐ¸Ð¸, ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ðµ HTTP Ð·Ð°Ð¿ÑÐ¾ÑÐ° Ñ Bearer Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸ÐµÐ¹,
        /// ÑÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ Ð´Ð°Ð½Ð½ÑÑ Ð² JSON (camelCase) Ð¸ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÑ.
        /// </summary>
        /// <param name="request">ÐÐ°Ð½Ð½ÑÐµ Ð»Ð¸Ð´Ð° Ð´Ð»Ñ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ¸.</param>
        /// <returns>true ÐµÑÐ»Ð¸ Ð»Ð¸Ð´ ÑÑÐ¿ÐµÑÐ½Ð¾ Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÐµÐ½, false Ð² ÑÐ»ÑÑÐ°Ðµ Ð¾ÑÐ¸Ð±ÐºÐ¸.</returns>
        public async Task<bool> SendLead(ExternalLeadRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(_settings.Url) || string.IsNullOrWhiteSpace(_settings.BearerToken))
                {
                    _logger.LogWarning("ÐÐ°ÑÐ°Ð¼ÐµÑÑÑ Ð²Ð½ÐµÑÐ½ÐµÐ³Ð¾ CRM API Ð»Ð¸Ð´Ð¾Ð² Ð½Ðµ Ð½Ð°ÑÑÑÐ¾ÐµÐ½Ñ Ð¿ÑÐ°Ð²Ð¸Ð»ÑÐ½Ð¾");
                    return false;
                }

                using var requestMessage = new HttpRequestMessage(HttpMethod.Post, _settings.Url);
                requestMessage.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(
                    "Bearer",
                    _settings.BearerToken);

                // Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÐ¼ camelCase Ð´Ð»Ñ ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ñ CRM API
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

                // ÐÑÐ¾Ð²ÐµÑÐºÐ° ÑÑÐ¿ÐµÑÐ½Ð¾ÑÑÐ¸ Ð¾ÑÐ²ÐµÑÐ°
                if (response.IsSuccessStatusCode)
                {
                    return true;
                }
                else
                {
                    // ÐÐ¾Ð³Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð¾ÑÐ¸Ð±ÐºÐ¸ Ñ Ð´ÐµÑÐ°Ð»ÑÐ¼Ð¸ Ð¾ÑÐ²ÐµÑÐ°
                    var errorContent = await response.Content.ReadAsStringAsync();
                    _logger.LogError(
                        $"ÐÑÐ¸Ð±ÐºÐ° Ð¿ÑÐ¸ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐµ Ð»Ð¸Ð´Ð° Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API. HTTP ÑÑÐ°ÑÑÑ: {response.StatusCode}, ÐÑÐ²ÐµÑ: {errorContent}");
                    return false;
                }
            }
            catch (Exception ex)
            {
                // ÐÐ¾Ð³Ð¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð½ÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½Ð¾Ð³Ð¾ Ð¸ÑÐºÐ»ÑÑÐµÐ½Ð¸Ñ
                _logger.LogError($"ÐÑÐºÐ»ÑÑÐµÐ½Ð¸Ðµ Ð¿ÑÐ¸ Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐµ Ð»Ð¸Ð´Ð° Ð²Ð¾ Ð²Ð½ÐµÑÐ½Ð¸Ð¹ CRM API: {ex.Message}", ex);
                return false;
            }
        }
    }
}
