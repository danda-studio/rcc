namespace RCC.Services.Model
{
    public class SendContactRequest
    {
        public string Name { get; set; } = string.Empty;
        public Phone Phone { get; set; } = new Phone();
        public ContactMethod ContactMethod { get; set; }
        public string Email { get; set; } = string.Empty;
    }
}
