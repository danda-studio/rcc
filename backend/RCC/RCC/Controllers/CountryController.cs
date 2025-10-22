using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;
using CountryData.Standard;
using System.Text.RegularExpressions;
using System.Linq;
using System.Collections.Generic;

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

            var countryHelper = new CountryHelper();
            var allCountries = countryHelper.GetCountryData() ?? new List<Country>();

            var countryCodes = supportedRegions
                .Select(region =>
                {
                    var exampleNumber = phoneUtil.GetExampleNumber(region);
                    var mask = exampleNumber != null
                        ? Regex.Replace(phoneUtil.Format(exampleNumber, PhoneNumberFormat.INTERNATIONAL), @"\d", "X")
                        : null;

                    var numericCode = phoneUtil.GetCountryCodeForRegion(region);

                    var countryInfo = allCountries.FirstOrDefault(c =>
                        !string.IsNullOrEmpty(c.CountryShortCode) &&
                        c.CountryShortCode.Equals(region, System.StringComparison.OrdinalIgnoreCase))
                        ??
                        allCountries.FirstOrDefault(c =>
                            !string.IsNullOrEmpty(c.PhoneCode) &&
                            int.TryParse(c.PhoneCode.Trim().TrimStart('+').Split(' ').FirstOrDefault() ?? "", out var pc) &&
                            pc == numericCode
                        );

                    return new
                    {
                        Region = region,
                        CountryPhoneCode = countryInfo?.PhoneCode,
                        CountryName = countryInfo?.CountryName ?? region,
                        Mask = mask
                    };
                })
                // 🔹 Фильтруем «пустые» или фиктивные регионы
                .Where(c => c.CountryPhoneCode != null && c.Mask != null)
                .OrderBy(c => c.CountryName)
                .ToList();

            return Ok(countryCodes);
        }
    }
}
