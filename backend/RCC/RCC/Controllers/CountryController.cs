using CountryData.Standard;
using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;
using RCC.Services.Model;
using System.Text.RegularExpressions;

namespace RCC.Controllers
{
    /// <summary>
    /// Контроллер для получения информации о странах и телефонных кодах.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        /// <summary>
        /// Получает список стран с телефонными кодами и масками номеров.
        /// </summary>
        /// <returns>
        /// Список объектов <see cref="CountryCodeResponse"/>, 
        /// содержащих код страны, название, регион и маску номера.
        /// </returns>
        [HttpGet("codes")]
        public ActionResult<IEnumerable<CountryCodeResponse>> GetCountryCodes()
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

                    return new CountryCodeResponse
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
