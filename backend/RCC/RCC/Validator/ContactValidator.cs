using System.Text.RegularExpressions;

namespace RCC.Validator
{
    /// <summary>
    /// Статический класс для валидации данных контактной формы.
    /// Содержит методы проверки имени, email адреса и номера телефона.
    /// </summary>
    public static class ContactValidator
    {
        /// <summary>
        /// Проверяет корректность имени клиента.
        /// </summary>
        /// <param name="name">Имя для проверки.</param>
        /// <param name="error">Выходной параметр с сообщением об ошибке (пуста строка если валидно).</param>
        /// <returns>
        /// true если имя прошло валидацию, false если валидация не прошла.
        /// </returns>
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

        /// <summary>
        /// Проверяет корректность email адреса.
        /// </summary>
        /// <param name="email">Email адрес для проверки.</param>
        /// <param name="error">Выходной параметр с сообщением об ошибке (пуста строка если валидно).</param>
        /// <returns>
        /// true если email прошёл валидацию, false если валидация не прошла.
        /// </returns>
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

        /// <summary>
        /// Проверяет корректность телефонного номера (код страны и собственно номер).
        /// </summary>
        /// <param name="code">Код страны (например, "7" для России).</param>
        /// <param name="number">Основной номер телефона (цифры).</param>
        /// <param name="error">Выходной параметр с сообщением об ошибке (пуста строка если валидно).</param>
        /// <returns>
        /// true если номер телефона прошёл валидацию, false если валидация не прошла.
        /// </returns>
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
