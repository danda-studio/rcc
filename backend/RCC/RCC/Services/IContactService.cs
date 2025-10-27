using RCC.Services.Model;

namespace RCC.Services
{
    /// <summary>
    /// Интерфейс сервиса для отправки контактных сообщений.
    /// </summary>
    public interface IContactService
    {
        /// <summary>
        /// Отправляет контактное сообщение с данными заявки.
        /// </summary>
        /// <param name="request">Данные заявки на контакт.</param>
        /// <returns>
        /// Асинхронно возвращает объект <see cref="SendContactResponse"/>, 
        /// содержащий информацию о результате отправки письма.
        /// </returns>
        Task<SendContactResponse> SendContact(SendContactRequest request);
    }
}
