using Microsoft.AspNetCore.Mvc;
using RCC.Services;
using RCC.Services.Model;

namespace RCC.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromBody] SendContactRequest request)
        {
            var result = await _contactService.SendContact(request);
            return Ok(result);
        }
    }
}
