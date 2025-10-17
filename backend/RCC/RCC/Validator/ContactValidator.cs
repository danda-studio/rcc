using System.Text.RegularExpressions;

namespace RCC.Validator
{
    public static class ContactValidator
    {
        // Проверка имени (не пустое, минимум 2 символа)
        public static bool ValidateName(string name, out string error)
        {
            error = "";
            if (string.IsNullOrWhiteSpace(name))
            {
                error = "Имя не может быть пустым.";
                return false;
            }

            if (name.Length < 2)
            {
                error = "Имя слишком короткое.";
                return false;
            }

            return true;
        }

        // Проверка email
        public static bool ValidateEmail(string email, out string error)
        {
            error = "";
            if (email == null)
            {
                error = "Email не может быть пустым.";
                return false;
            }

            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                error = "Неверный формат email.";
                return false;
            }
        }

        // Проверка номера телефона (код страны и цифры)
        public static bool ValidatePhone(string code, string number, out string error)
        {
            if (string.IsNullOrWhiteSpace(code) || string.IsNullOrWhiteSpace(number))
            {
                error = "Код страны и номер телефона обязательны.";
                return false;
            }
            else if (!Regex.IsMatch(code, @"^\d+$"))
            {
                error = "Код страны должен содержать только цифры.";
                return false;
            }
            else if (!Regex.IsMatch(number, @"^\d{5,15}$"))
            {
                error = "Номер телефона должен содержать от 5 до 15 цифр.";
                return false;
            }
            else
            {
                error = "";
                return true;
            }
        }
    }
}
