"use client";

import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useMutation, useQuery} from "@tanstack/react-query";

import { UIInputField } from "@/shared";
import { UIPhoneField } from "@/shared/ui/select-input-field/UIPhoneField";
import { SocialTabSelect } from "@/entities/social";
import { Field } from "@/shared/lib/shadcn/ui/field";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { contactFormSchema, ContactFormValues } from "@/features/contact/model/contactFormSchema";
import {postApiContactContact} from "@/shared/api/generated";
import {ContactMethod} from "@/shared/api/scheme";
import {ContactMethodType} from "@/entities/social/ui/tab-select/SocialTabSelect";

export const ContactFormFeature: FC = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
          phone: {
            code: "+373",
            number: "",
          },
          contactMethod: ContactMethod.NUMBER_0,
            email: "",
        },
    });

    const { control, handleSubmit, setValue, reset, formState, watch } = form;
    const { errors } = formState;

  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const res = await postApiContactContact(values);
      return res.data ?? res;
    },
    onSuccess: () => {
      reset();
    },
    onError: (err: any) => {
      console.error("Ошибка отправки формы", err);
    },
  });

  const onSubmit = handleSubmit((values) => {
    mutation.mutate(values);
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
                    render={({ field: {onChange, value} }) => (
                        <UIPhoneField
                            id="phone"
                            label="Телефон"
                            value={value}
                            error={errors.phone?.message}
                            onChange={onChange}
                        />
                    )}
                />

                <Field orientation="horizontal">
                  <Controller
                    name="contactMethod"
                    control={form.control}
                    render={({ field }) => (
                      <SocialTabSelect
                        value={field.value as ContactMethodType}
                        onChange={(val) => field.onChange(Number(val))}
                      />
                    )}
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
                    <Button type="submit" className="w-full  cursor-pointer" >
                      Подобрать квартиру
                    </Button>
                </Field>
            </form>

        </div>
    );
};
