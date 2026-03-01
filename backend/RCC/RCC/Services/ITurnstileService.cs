namespace RCC.Services
{
    public interface ITurnstileService
    {
        Task<bool> VerifyUser(string token, string ip);
    }
}
