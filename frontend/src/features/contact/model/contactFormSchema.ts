// src/features/contact/model/contactFormSchema.ts
import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Введите имя"),
    phone: z.string().min(5, "Введите телефон"),
    contactMethod: z.string().optional(),
    email: z.string().email("Некорректный email").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
