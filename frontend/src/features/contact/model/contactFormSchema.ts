// src/features/contact/model/contactFormSchema.ts
import {z} from "zod";
import {ContactMethod} from "@/shared/api/scheme";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.object({
    code: z.string().min(1, "Выберите код страны"),
    number: z.string().min(5, "Введите телефон"),
  }),
  contactMethod: z.enum(ContactMethod),
  email: z.string().email("Некорректный email").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
