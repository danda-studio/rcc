using RCC.Services.Model;

namespace RCC.Services
{
    /// <summary>
    /// Интерфейс для сервиса отправки лидов во внешний CRM API.
    /// Определяет контракт для отправки контактных данных клиентов в систему CRM.
    /// </summary>
    public interface IExternalLeadService
    {
        /// <summary>
        /// Отправляет лид (контактные данные) во внешний CRM API.
        /// </summary>
        /// <param name="request">Объект ExternalLeadRequest с полными данными лида и отслеживания.</param>
        /// <returns>
        /// Task&lt;bool&gt; - асинхронно возвращает true если лид успешно отправлен,
        /// false если произошла ошибка при отправке.
        /// </returns>
        Task<bool> SendLead(ExternalLeadRequest request);
    }
}
