import { z } from "zod";
import { ContactMethod } from "@/shared/api/scheme";

export const contactFormSchema = z.object({
  name: z.string().min(2),
  phone: z.object({
    code: z.string().min(1),
    number: z.string()
      .regex(/^\d+$/)
      .min(5)
      .max(15),
  }),
  contactMethod: z.enum(ContactMethod),
  email: z.email(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
