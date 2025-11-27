// src/shared/ui/input-field/UIInputField.tsx
import type { FC } from "react";
import type { UIInputFieldProps } from "./types";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";

export interface ControlledUIInputFieldProps extends UIInputFieldProps {
  name: string;
  value?: string;
  onChange: () => void;
  onBlur?: () => void;
  error: any;
}

export const UIInputField: FC<ControlledUIInputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => {
  return (
    <Field className="relative rounded-md bg-gray-3">
      <FieldLabel
        className={`
          absolute top-1/2 z-0 -translate-y-1/2 px-3.5 text-gray-5
          transition-all
          has-[+input:focus,+input:not(:placeholder-shown)]:top-2.25
          has-[+input:focus,+input:not(:placeholder-shown)]:translate-y-0
          has-[+input:focus,+input:not(:placeholder-shown)]:text-xxs
          [&+input]:pt-5.75 [&+input]:pb-2.25 [&+input]:leading-5
        `}
        htmlFor={id}
      >
        {label}
      </FieldLabel>

      <Input
        id={id}
        placeholder={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        className={`
          z-10 bg-transparent
          ${className ?? ""}
          ${error ? "border-red-1" : ""}
        `}
      />

      {error && (
        <span className="absolute top-full text-xxs leading-none text-red-1">
          {error}
        </span>
      )}
    </Field>
  );
};
