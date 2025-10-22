// src/features/contact/model/contactFormSchema.ts
import { z } from "zod";
import { ContactMethod } from "@/shared/api/scheme";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.object({
    code: z.string().min(1, "Выберите код страны"),
    number: z.string()
      .regex(/^\d+$/, "Номер должен содержать только цифры")
      .min(5, "Минимальная длина номера 5 символов")
      .max(15, "Максимальная длина номера 15 символов"),
  }),
  contactMethod: z.enum(ContactMethod),
  email: z.email("Некорректный email"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
