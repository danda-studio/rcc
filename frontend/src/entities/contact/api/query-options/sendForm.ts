import { queryOptions } from "@tanstack/react-query";
import { postApiContactContact } from "@/shared/api/generated";
import { SendContactResponse } from "@/shared/api/scheme";
import { ContactFormValues } from "@/features/contact/model/contactFormSchema";

export function contactSendFormQueryOptions(form: ContactFormValues) {
    return queryOptions<SendContactResponse>({
        queryKey: ["contact-form", form],
        queryFn: async () => {
            if (!form) {
                throw new Error("Форма пуста");
            }

            const { data } = await postApiContactContact(form);

            if (!data) {
                throw new Error("Пустой ответ от сервера");
            }

            return data;
        },
        enabled: false,
        retry: false,
    });
}