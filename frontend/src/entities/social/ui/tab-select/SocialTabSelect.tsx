import type { FC } from "react";

const socials = ["Звонок", "WhatsApp", "Telegram"];

export const SocialTabSelect: FC = () => {
  return (
    <div className={`
      flex
      gap-2
    `}
    >
      {socials.map(s => (
        <div
          className={`
            relative
            text-gray-4
            border
            border-gray-2
            bg-gray-3
            has-[input:checked]:border-blue-6
            has-[input:checked]:bg-blue-6
            has-[input:checked]:text-white
            px-4
            h-9
            flex
            items-center
            rounded-sm
            font-medium
          `}
          key={s}
        >
          <input
            className={`
              absolute
              inset-0
              opacity-0
            `}
            name="social"
            type="radio"
            value={s}
          />
          {s}
        </div>
      ))}

    </div>
  );
};
