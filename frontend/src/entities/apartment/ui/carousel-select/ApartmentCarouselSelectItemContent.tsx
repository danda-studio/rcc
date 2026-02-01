import type { FC } from "react";
import type { ApartmentCarouselSelectItemProps } from "./types";
import Image from "next/image";
import { useMemo } from "react";
import { cn } from "@/shared/lib/shadcn/utils";

export const ApartmentCarouselSelectItemContent: FC<ApartmentCarouselSelectItemProps> = ({
  id,
  room,
  area: { total, oldPrice, newPrice },
  image: { card },
  checked,
  onClick,
  className,
  disabled,
}) => {
  const title = useMemo(() => {
    let title = "";
    switch (room) {
      case 1:
        title = "1 комната";
        break;
      case 2:
        title = "2 комнаты";
        break;
    }
    return title;
  }, [room]);

  return (
    <div
      onClick={onClick}
      className={cn(`
        relative flex flex-col p-4
        not-has-[input:checked]:min-h-75 not-has-[input:checked]:rounded-md
        not-has-[input:checked]:bg-white not-has-[input:checked]:text-blue-6
        not-has-[input:checked]:!backdrop-blur-none
        not-has-[input:checked]:before:hidden
        has-[input:checked]:min-h-86.5 has-[input:checked]:text-white
        has-[input:disabled]:opacity-20
        md:has-[input:checked]:min-h-100 md:has-[input:checked]:p-6
      `, className)}
    >
      <Image
        className="absolute inset-0 h-full w-full"
        src="/images/backdrop/1.png"
        alt="bg"
        width={320}
        height={400}
      />
      <div className="absolute inset-0 flex flex-col p-4">
        <p className={`
          mb-1 text-md leading-[1.2] font-semibold
          has-[~input:checked]:mb-2 has-[~input:checked]:text-md-x
          md:has-[~input:checked]:text-lg
        `}
        >
          {title}
        </p>
        <p className={`
          text-xs leading-[1.2]
          not-has-[~input:checked]:mb-5 not-has-[~input:checked]:text-blue-6/72
          has-[~input:checked]:mb-7 has-[~input:checked]:text-base
          has-[~input:checked]:text-white/72
          md:has-[~input:checked]:text-md
        `}
        >
          {total}
          {" "}
          м
        </p>
        <div className={`
          relative overflow-hidden
          not-has-[~input:checked]:-mx-4 not-has-[~input:checked]:h-35
          has-[~input:checked]:-mx-6 has-[~input:checked]:h-39
          md:has-[~input:checked]:h-45
        `}
        >
          <Image
            alt={`Room ${id}`}
            src={card}
            width={320}
            height={180}
            className="absolute h-full w-full object-contain"
          />
        </div>

        <input
          name="ApartmentCarouselSelect"
          type="radio"
          checked={checked}
          className="absolute inset-0 hidden opacity-0"
          onChange={onClick}
          disabled={disabled}
        />

        {(oldPrice && newPrice) && (
            <div
            className={cn(
                "absolute flex flex-col bottom-4 text-left gap-3 z-10",
                checked ? "bottom-4" : "bottom-[6]"
          )}
            >
              <p
                  className={cn(
                      "font-medium -tracking-sm line-through",
                      checked
                          ? "text-white/72 text-sm-m md:text-md"
                          : "top-4 text-gray-13/72 text-gray-13/72 md:text-xs"
                  )}
              >
                    {oldPrice.toLocaleString("ru-RU")} ₽
              </p>
              <p
                  className={cn(
                      "font-medium bg-red-3 text-white",
                      checked
                          ? "text-md-x md:text-lg rounded-xl px-4 py-1.5"
                          : "text-md-x md:text-md rounded-xl px-4 py-1.5"
                  )}
              >
                {newPrice.toLocaleString("ru-RU")} ₽
              </p>
            </div>
        )}
      </div>
    </div>
  );
};
