using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;
using System.Text.RegularExpressions;

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
                .Select(region =>
                {
                    var exampleNumber = phoneUtil.GetExampleNumber(region);
                    var mask = exampleNumber != null
                        ? Regex.Replace(phoneUtil.Format(exampleNumber, PhoneNumberFormat.INTERNATIONAL), @"\d", "X")
                        : null;

                    return new
                    {
                        Region = region,
                        CountryCode = phoneUtil.GetCountryCodeForRegion(region),
                        Mask = mask
                    };
                })
                .OrderBy(c => c.CountryCode)
                .ToList();

            return Ok(countryCodes);
        }
    }
}
