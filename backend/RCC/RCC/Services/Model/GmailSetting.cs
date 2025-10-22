namespace RCC.Services.Model
{
    public class GmailSetting
    {
        public string SmtpServer { get; set; } = string.Empty;
        public int SmtpPort { get; set; }
        public string ApiKey { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public List<string> Recipients { get; set;} = new List<string>();
    }
}
