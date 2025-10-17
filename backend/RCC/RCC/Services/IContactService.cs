using RCC.Services.Model;

namespace RCC.Services
{
    public interface IContactService
    {
        Task<SendContactResponse> SendContact(SendContactRequest request);
    }
}
