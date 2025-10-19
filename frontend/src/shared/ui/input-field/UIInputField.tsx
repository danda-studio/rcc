import type { FC } from "react";
import type { UIInputFieldProps } from "./types";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";

export const UIInputField: FC<UIInputFieldProps> = ({ id, label }) => {
  return (
    <Field className="relative">
      <FieldLabel
        className={`
          absolute
          text-gray-5
          px-3.5
          has-[+input:focus,+input:not(:placeholder-shown)]:top-2.25
          top-1/2
          has-[+input:focus,+input:not(:placeholder-shown)]:translate-y-0
          -translate-y-1/2
          has-[+input:focus,+input:not(:placeholder-shown)]:text-xxs
          [&+input]:pb-2.25
          [&+input]:pt-5.75
          [&+input]:leading-5
        `}
        htmlFor={id}
      >
        {label}
      </FieldLabel>
      <Input
        id={id}
        placeholder={label}
        required
      />
    </Field>
  );
};
