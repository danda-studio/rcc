using Microsoft.AspNetCore.Mvc;
using RCC.Services;
using RCC.Services.Model;

namespace RCC.Controllers
{
    /// <summary>
    /// Контроллер для обработки контактных заявок от пользователей.
    /// Отвечает за приём данных форм, валидацию и передачу в сервисы.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly IAntiBotService _antiBotService;

        /// <summary>
        /// Инициализирует новый экземпляр <see cref="ContactController"/>.
        /// </summary>
        /// <param name="contactService">Сервис для отправки контактных сообщений и лидов.</param>
        /// <param name="antiBotService">Сервис для проверки защиты от ботов.</param>
        public ContactController(IContactService contactService, IAntiBotService antiBotService)
        {
            _contactService = contactService;
            _antiBotService = antiBotService;
        }

        /// <summary>
        /// Отправляет контактную заявку с автоматическим сбором IP адреса.
        /// Данные отправляются на email и во внешний CRM API для обработки лида.
        /// </summary>
        /// <param name="request">Данные заявки на контакт (поступают с фронтенда).</param>
        /// <returns>
        /// Объект <see cref="SendContactResponse"/>, содержащий результат обработки заявки.
        /// Success = true если письмо отправлено, false если ошибка валидации.
        /// </returns>
        /// <response code="200">Заявка успешно обработана, возвращается результат.</response>
        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromBody] SendContactRequest request)
        {
            // Проверка защиты от ботов (закомментирована, можно включить при необходимости)
            //var ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "";
            //var decision = await _antiBotService.CheckUser(request, ip);

            //if (decision.NeedCaptcha)
            //    return Ok(new SendContactResponse
            //    {
            //        Success = false,
            //        NeedCaptcha = true
            //    });

            //if (!decision.Allowed)
            //    return Ok(new SendContactResponse { Success = true });

            // Извлечение IP адреса клиента из HttpContext
            var ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "";
            
            // Отправка заявки через сервис (обработка, email, CRM API)
            var result = await _contactService.SendContact(request, ip);
            
            return Ok(result);
        }
    }
}
