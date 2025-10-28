import type { FC } from "react";
import type { ApartmentCarouselSelectItemProps } from "./types";
import Image from "next/image";
import { useMemo } from "react";
import { Badge } from "@/shared/lib/shadcn/ui/badge";
import { cn } from "@/shared/lib/shadcn/utils";

export const ApartmentCarouselSelectItemContent: FC<ApartmentCarouselSelectItemProps> = ({
  id,
  floors,
  room,
  area: { total },
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
      style={{
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}
      className={cn(`
        relative
        flex
        flex-col
        p-4
        md:has-[input:checked]:p-6
        not-has-[input:checked]:bg-white
        not-has-[input:checked]:before:hidden
        not-has-[input:checked]:!backdrop-blur-none
        not-has-[input:checked]:text-blue-6
        has-[input:checked]:text-white
        not-has-[input:checked]:min-h-75
        has-[input:checked]:min-h-86.5
        md:has-[input:checked]:min-h-100
        has-[input:disabled]:opacity-20
        not-has-[input:checked]:rounded-md
        overflow-hidden
      `, className)}
    >
      <Image
        className={`
          absolute
          inset-0
          w-full
          h-full
        `}
        src="/images/backdrop/1.png"
        alt="bg"
        width={320}
        height={400}
      />
      <div className={`
        absolute
        inset-0
        flex
        flex-col
        p-4
      `}
      >
        <p className={`
          leading-[1.2]
          font-semibold
          text-md
          has-[~input:checked]:text-md-x
          md:has-[~input:checked]:text-lg
          mb-1
          has-[~input:checked]:mb-2
        `}
        >
          {title}
        </p>
        <p className={`
          leading-[1.2]
          text-xs
          has-[~input:checked]:text-base
          md:has-[~input:checked]:text-md
          not-has-[~input:checked]:mb-5
          has-[~input:checked]:mb-7
          not-has-[~input:checked]:text-blue-6/72
          has-[~input:checked]:text-white/72
        `}
        >
          {total}
          {" "}
          м
        </p>
        <div className={`
          relative
          overflow-hidden
          has-[~input:checked]:-mx-6
          not-has-[~input:checked]:-mx-4
          has-[~input:checked]:h-39
          md:has-[~input:checked]:h-45
          not-has-[~input:checked]:h-35
        `}
        >
          <Image
            alt={`Room ${id}`}
            src={card}
            width={320}
            height={180}
            className={`
              absolute
              w-full
              h-full
              object-contain
            `}
          />
        </div>

        <div className={`
          flex
          gap-2
          has-[~input:checked]:hidden
          mt-auto
          overflow-hidden
        `}
        >
          <Badge size="sm">
            {id}
          </Badge>

          <Badge
            size="sm"
            className={`
              max-w-full
              !shrink
              overflow-hidden
            `}
          >
            <span className={`
              overflow-hidden
              text-ellipsis
              w-full
            `}
            >
              Этажи
              {" "}
              {floors.join(",")}
            </span>
          </Badge>
        </div>
        <div className={`
          flex
          gap-2
          not-has-[~input:checked]:hidden
          mt-auto
          overflow-hidden
        `}
        >
          <Badge variant="glass" size="md">
            {id}
          </Badge>

          <Badge
            variant="glass"
            size="md"
            className={`
              max-w-full
              !shrink
              overflow-hidden
            `}
          >
            <span className={`
              overflow-hidden
              text-ellipsis
              w-full
            `}
            >
              ыыыфввыфв
              {" "}
              {floors.join(",")}
            </span>
          </Badge>
        </div>

        <input
          name="ApartmentCarouselSelect"
          type="radio"
          checked={checked}
          className={`
            absolute
            inset-0
            opacity-0
            hidden
          `}
          onChange={onClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
