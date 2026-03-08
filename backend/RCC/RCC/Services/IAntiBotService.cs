using RCC.Services.Model;

namespace RCC.Services
{
    /// <summary>
    /// Интерфейс сервиса проверки активности пользователя для защиты от ботов.
    /// Определяет контракт для анализа и верификации взаимодействия пользователя с формами.
    /// </summary>
    public interface IAntiBotService
    {
        /// <summary>
        /// Проверяет является ли пользователь потенциальным ботом на основе данных запроса.
        /// </summary>
        /// <param name="request">Данные контактной заявки, содержащие информацию об антибот-защите.</param>
        /// <param name="ip">IP адрес клиента для проверки на чёрный список и анализа.</param>
        /// <returns>
        /// Асинхронно возвращает объект <see cref="BotDecision"/>, 
        /// содержащий решение о допуске запроса и причины отклонения (если применимо).
        /// </returns>
        Task<BotDecision> CheckUser(SendContactRequest request, string ip);
    }
}
