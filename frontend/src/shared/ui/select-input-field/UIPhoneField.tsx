import type { FC } from "react";
import type { UIInputFieldProps } from "./types";
import { Field, FieldLabel } from "@/shared/lib/shadcn/ui/field";
import { Input } from "@/shared/lib/shadcn/ui/input";
import {UISelectInputFieldProps} from "@/shared/ui/select-input-field/types/UIInputFieldProps";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/lib/shadcn/ui/select";

export const UIPhoneField: FC<UISelectInputFieldProps> = ({ id, label }) => {
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
      <div className="relative w-[300px]">
        <Select defaultValue="+7">
          <SelectTrigger
            className="
            absolute left-2 top-1/2 -translate-y-1/2
            w-[80px] h-[36px]
            bg-[#E9ECEF]
            rounded-md
            border-none
            text-sm
            focus:ring-0 focus:outline-none
            pl-2 pr-1
          "
          >
          <span className="flex items-center gap-1">
            🇷🇺 <SelectValue placeholder="+7" />
          </span>
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="+7">🇷🇺 +7</SelectItem>
            <SelectItem value="+373">🇲🇩 +373</SelectItem>
            <SelectItem value="+380">🇺🇦 +380</SelectItem>
          </SelectContent>
        </Select>

        {/* Инпут с отступом под селект */}
        <Input
          type="tel"
          placeholder="Телефон"
          className="
          h-[44px] w-full bg-[#E9ECEF] border-none rounded-lg
          pl-[90px] text-sm text-gray-700
          placeholder:text-gray-400
          focus-visible:ring-0 focus-visible:outline-none
        "
        />
      </div>
    </Field>
  );
};
