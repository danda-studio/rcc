using Microsoft.AspNetCore.Mvc;
using RCC.Services;
using RCC.Services.Model;

namespace RCC.Controllers
{
    /// <summary>
    /// Контроллер для обработки контактных заявок от пользователей.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="ContactController"/>.
        /// </summary>
        /// <param name="contactService">Сервис для отправки контактных сообщений.</param>
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        /// <summary>
        /// Отправляет контактную заявку.
        /// </summary>
        /// <param name="request">Данные заявки на контакт.</param>
        /// <returns>
        /// Объект <see cref="SendContactResponse"/>, содержащий результат отправки заявки.
        /// </returns>
        /// <response code="200">Заявка успешно обработана, возвращается результат.</response>
        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromBody] SendContactRequest request)
        {
            var result = await _contactService.SendContact(request);
            return Ok(result);
        }
    }
}
