import type { FC } from "react";
import { ContactMethod } from "@/shared/api/scheme";

export type ContactMethodType = (typeof ContactMethod)[keyof typeof ContactMethod];

export const socials = [
  { label: "Звонок", value: ContactMethod.NUMBER_0 },
  { label: "WhatsApp", value: ContactMethod.NUMBER_1 },
  { label: "Telegram", value: ContactMethod.NUMBER_2 },
] as const;

interface SocialTabSelectProps {
  value?: ContactMethodType;
  onChange?: (val: ContactMethodType) => void;
}

export const SocialTabSelect: FC<SocialTabSelectProps> = ({ value, onChange }) => {
  return (
    <div className={`
      flex
      gap-1.5
    `}
    >
      {socials.map(s => (
        <label
          key={s.value}
          className={`
            relative
            cursor-pointer
            text-gray-4
            border
            border-gray-2
            bg-gray-3
            has-[input:checked]:border-blue-6
            has-[input:checked]:bg-blue-6
            has-[input:checked]:text-white
            px-3.75
            h-9
            flex
            items-center
            rounded-sm
            font-medium
          `}
        >
          <input
            type="radio"
            name="social"
            value={s.value}
            checked={value === s.value}
            onChange={() => onChange?.(s.value)}
            className={`
              absolute
              inset-0
              opacity-0
              cursor-pointer
            `}
          />
          {s.label}
        </label>
      ))}
    </div>
  );
};
