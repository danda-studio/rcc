using RCC.Services.Model;

namespace RCC.Services
{
    /// <summary>
    /// Интерфейс сервиса для отправки контактных сообщений и лидов в CRM.
    /// Определяет контракт для обработки контактных заявок от пользователей.
    /// </summary>
    public interface IContactService
    {
        /// <summary>
        /// Отправляет контактное сообщение на email и передаёт лид во внешний CRM API.
        /// </summary>
        /// <param name="request">Данные заявки на контакт (поступают с фронтенда).</param>
        /// <param name="ipAddress">IP адрес клиента (извлекается сервером из HttpContext).</param>
        /// <returns>
        /// Асинхронно возвращает объект <see cref="SendContactResponse"/>, 
        /// содержащий информацию о результате отправки.
        /// </returns>
        Task<SendContactResponse> SendContact(SendContactRequest request, string ipAddress = "");
    }
}
