"use client";

import type { FC } from "react";
import type { ContactMethodType } from "@/entities/social/ui/tab-select/SocialTabSelect";
import type { ContactFormValues } from "@/features/contact/model/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { SocialTabSelect } from "@/entities/social";
import { contactFormSchema } from "@/features/contact/model/contactFormSchema";
import { UIInputField } from "@/shared";
import { postApiContactContact } from "@/shared/api/generated";
import { ContactMethod } from "@/shared/api/scheme";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { Field } from "@/shared/lib/shadcn/ui/field";
import { cn } from "@/shared/lib/shadcn/utils";
import { UIPhoneField } from "@/shared/ui/phone-field/UIPhoneField";
import {reachGoal} from "@/shared/lib/analytics/yandexMetrika";

export const ContactFormFeature: FC<{ className?: string }> = ({ className }) => {

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: {
        code: "+7-RU",
        number: "",
      },
      contactMethod: ContactMethod.NUMBER_0,
      email: "",
    },
    mode: "onChange",
  });

  const { control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  const mutation = useMutation({
    mutationFn: async ({ contactMethod, name, phone: { code, number }, email }: ContactFormValues) => {
      const res = await postApiContactContact({
        name,
        phone: {
          code: code.replace(/\D/g, ""),
          number,
        },
        contactMethod,
        email,
      });
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
    reachGoal('submit-form', {
      name: values.name,
      email: values.email,
      phone: `${values.phone.code}${values.phone.number}`,
    });
  });

  return (
      <div className={cn(`text-blue-6`, className)}>
        <form
            noValidate
            className="flex flex-col gap-3.5"
            onSubmit={onSubmit}
        >
          <Controller
              name="name"
              control={control}
              render={({field}) => (
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
              render={({field}) => (
                  <UIPhoneField
                      {...field}
                      id="phone"
                      label="Телефон"
                      error={errors.phone?.code?.message ?? errors.phone?.number?.message}
                  />
              )}
          />

          <Field orientation="horizontal">
            <Controller
                name="contactMethod"
                control={form.control}
                render={({field}) => (
                    <SocialTabSelect
                        value={field.value as ContactMethodType}
                        onChange={val => field.onChange(Number(val))}
                    />
                )}
            />
          </Field>

          <Controller
              name="email"
              control={control}
              render={({field: {onChange, value}}) => (
                  <UIInputField
                      value={value}
                      name="email"
                      onChange={onChange}
                      id="email"
                      label="Email"
                      error={errors.email?.message}
                  />
              )}
          />

          <Field orientation="horizontal">
            <Button
                id="submit-form"
                type="submit"
                size="md"
                className="w-full cursor-pointer"
            >
              {
                mutation.isPending
                    ? <Loader2Icon className="animate-spin"/>
                    : "Подобрать квартиру"
              }

            </Button>
          </Field>
        </form>

      </div>
  );
};
