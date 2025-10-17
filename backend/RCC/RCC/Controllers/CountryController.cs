using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;

namespace RCC.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        [HttpGet("codes")]
        public IActionResult GetCountryCodes()
        {
            var phoneUtil = PhoneNumberUtil.GetInstance();
            var supportedRegions = phoneUtil.GetSupportedRegions();

            var countryCodes = supportedRegions
                .Select(region => new
                {
                    Region = region,
                    CountryCode = phoneUtil.GetCountryCodeForRegion(region),
                    ExampleNumber = phoneUtil.GetExampleNumber(region)?.NationalNumber.ToString()

                })
                .OrderBy(c => c.CountryCode)
                .ToList();

            return Ok(countryCodes);
        }
    }
}
