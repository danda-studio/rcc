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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        className={`
          ${className ?? ""}
          ${error ? "border-red-500" : ""}
        `}
      />

      {error && (
        <span className={`
          absolute
          text-xs
          text-red-500
          mt-1
        `}
        >
          {error}
        </span>
      )}
    </Field>
  );
};
