import type { CountryCode } from "@/shared/ui/phone-field/types";
import { z } from "zod";
import { ContactMethod } from "@/shared/api/scheme";

export const contactFormSchema = (codes: CountryCode[]) => z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.object({
    code: z.string().min(1, "Выберите код страны"),
    number: z.string(),
  }),
  contactMethod: z.enum(ContactMethod),
  email: z.string().regex(/^$|^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/, { error: "Некорректный Email" }).optional().nullable(),
}).refine(({ phone }) => {
  const code = phone.code.split("-")[0];
  const mask = codes.find(({ countryPhoneCode }) => countryPhoneCode === code)?.mask;
  if (!mask) {
    return;
  }
  const numberMask = mask.split(" ").slice(1).join(" ");
  const escaped = numberMask.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regexStr = escaped.replace(/X/g, "\\d");
  const regex = new RegExp(`^${regexStr}$`);
  return regex.test(phone.number);
}, { path: ["phone", "number"], error: "Необходимо ввести номер полностью", abort: true });

export type ContactFormValues = z.infer<ReturnType<typeof contactFormSchema>>;
