using RCC.Services.Model;

namespace RCC.Services
{
    public interface IAntiBotService
    {
        Task<BotDecision> CheckUser(SendContactRequest request, string ip);
    }
}
