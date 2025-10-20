import type { FC } from "react";
import type { UIInputFieldProps } from "./types";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";
import {UISelectInputFieldProps} from "@/shared/ui/select-input-field/types/UIInputFieldProps";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/lib/shadcn/ui/select";
import {UIInputField} from "@/shared";

export const UIPhoneField: FC<UISelectInputFieldProps> = ({ id, label }) => {
  return (
    <Field className="relative pb-10">
      <FieldLabel
        className={`
          absolute z-20
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
        <Select defaultValue="+7">
            <SelectTrigger
                className="
              !max-w-20
              !max-h-9
              rounded-xs
              border-none
              text-sm
              text-blue-6
              !bg-gray-8
              focus:ring-0 focus:outline-none
              ![&>svg]:!text-gray-9
            "
            >
                () +7
          </SelectTrigger>

          <SelectContent className={'bg-black w-80'}>
            <SelectItem value="+7">🇷🇺 +7</SelectItem>
            <SelectItem value="+373">🇲🇩 +373</SelectItem>
            <SelectItem value="+380">🇺🇦 +380</SelectItem>
          </SelectContent>
        </Select>
        <Input
            id={id}
            placeholder={label}
            required
        />
    </Field>

  );
};
