using RCC.Services.Model;
using System.Text.Json;

namespace RCC.Services
{
    public class TurnstileService : ITurnstileService
    {
        private readonly HttpClient _http;
        private readonly string _secret;

        public TurnstileService(HttpClient http, IConfiguration config)
        {
            _http = http;
            _secret = config["Turnstile:SecretKey"];
        }

        public async Task<bool> VerifyUser(string token, string ip)
        {
            var response = await _http.PostAsync(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                new FormUrlEncodedContent(new Dictionary<string, string>
                {
                    ["secret"] = _secret,
                    ["response"] = token,
                    ["remoteip"] = ip
                })
            );

            var json = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<TurnstileResponse>(json);

            return result?.Success == true;
        }
    }

}
