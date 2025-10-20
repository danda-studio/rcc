"use client";

import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";

import { UIInputField } from "@/shared";
import { UIPhoneField } from "@/shared/ui/select-input-field/UIPhoneField";
import { SocialTabSelect } from "@/entities/social";
import { Field } from "@/shared/lib/shadcn/ui/field";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { contactSendFormQueryOptions } from "@/entities/contact/api/query-options/sendForm";
import { contactFormSchema, ContactFormValues } from "@/features/contact/model/contactFormSchema";

export const ContactFormFeature: FC = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            contactMethod: "",
            email: "",
        },
    });

    const { control, handleSubmit, setValue, reset, formState, watch } = form;
    const { errors } = formState;
    const formData = watch();

    const { refetch, isFetching, isSuccess, isError, error } = useQuery(
        contactSendFormQueryOptions(formData));

    const onSubmit = handleSubmit(async () => {
        const { data } = await refetch();
        if (!data) {
            alert("Форма успешно отправлена!");
            reset();
        } else {
            console.log('ошибка')
        }
    });

    return (
        <div className="w-full max-w-md text-blue-6">
            <form className="flex flex-col gap-3.5" onSubmit={onSubmit}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <UIInputField
                            {...field}
                            id="name"
                            label="Имя"
                            error={errors.name?.message}
                        />
                    )}
                />

                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <UIPhoneField
                            {...field}
                            id="phone"
                            label="Телефон"
                            error={errors.phone?.message}
                            onChange={(val) => field.onChange(val)}
                        />
                    )}
                />

                <Field orientation="horizontal">
                    <SocialTabSelect
                        onChange={(method: string) => setValue("contactMethod", method)}
                    />
                </Field>

                <Controller
                    name="email"
                    control={control}
                    render={({ field: {onChange, value} }) => (
                        <UIInputField
                            value={value}
                            name={'email'}
                            onChange={onChange}
                            id="email"
                            label="Email"
                            error={errors.email?.message}
                        />
                    )}
                />

                <Field orientation="horizontal">
                    <Button type="submit" className="w-full" disabled={isFetching}>
            <span className="font-medium">
              {isFetching ? "Отправка..." : "Подобрать квартиру"}
            </span>
                    </Button>
                </Field>
            </form>

            {isSuccess && <p className="text-green-600 mt-2 text-sm">✅ Заявка отправлена успешно!</p>}
            {isError && <p className="text-red-600 mt-2 text-sm">❌ Ошибка при отправке формы</p>}
        </div>
    );
};
