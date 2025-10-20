import type { FC } from "react";
import type { ApartmentCarouselSelectItemProps } from "./types";
import Image from "next/image";
import { Badge } from "@/shared/lib/shadcn/ui/badge";
import { cn } from "@/shared/lib/shadcn/utils";
import { UIGlass } from "@/shared/ui/glass";

export const ApartmentCarouselSelectItemContent: FC<ApartmentCarouselSelectItemProps> = ({
  id,
  title,
  floor,
  frame,
  size,
  image,
  checked,
  onClick,
  className,
  disabled,
}) => {
  return (
    <UIGlass
      className={cn(`
        relative
        flex
        flex-col
        p-4
        has-[input:checked]:p-6
        not-has-[input:checked]:bg-white
        not-has-[input:checked]:before:hidden
        not-has-[input:checked]:!backdrop-blur-none
        not-has-[input:checked]:text-blue-6
        has-[input:checked]:text-white
        not-has-[input:checked]:min-h-75
        has-[input:checked]:min-h-100
        has-[input:disabled]:opacity-20
      `, className)}
      border="corner-fixed"
    >
      <p className={`
        leading-[1.2]
        font-semibold
        text-base
        has-[~input:checked]:text-lg
        mb-1
        has-[~input:checked]:mb-2
      `}
      >
        {title}
      </p>
      <p className={`
        leading-[1.2]
        text-xs
        has-[~input:checked]:text-md
        not-has-[~input:checked]:mb-5
        has-[~input:checked]:mb-7
        not-has-[~input:checked]:text-blue-6/72
        has-[~input:checked]:text-white/72
      `}
      >
        {size}
        м
      </p>
      <div className={`
        relative
        overflow-hidden
        has-[~input:checked]:-mx-6
        not-has-[~input:checked]:-mx-4
        has-[~input:checked]:h-45
        not-has-[~input:checked]:h-35
      `}
      >

        <Image
          alt={`Room ${id}`}
          src={image}
          width={320}
          height={180}
          className={`
            absolute
            w-full
            h-full
            object-cover
          `}
        />
      </div>

      <div className={`
        flex
        gap-2
        has-[~input:checked]:hidden
        mt-auto
      `}
      >
        <Badge size="sm">
          Корпус
          {" "}
          {frame}
        </Badge>

        <Badge size="sm">
          Этаж
          {" "}
          {floor}
        </Badge>
      </div>
      <div className={`
        flex
        gap-2
        not-has-[~input:checked]:hidden
        mt-auto
      `}
      >
        <Badge variant="glass" size="md">
          Корпус
          {" "}
          {frame}
        </Badge>

        <Badge variant="glass" size="md">
          Этаж
          {" "}
          {floor}
        </Badge>
      </div>

      <input
        name="ApartmentCarouselSelect"
        type="radio"
        defaultChecked={checked}
        className={`
          absolute
          inset-0
          opacity-0
        `}
        disabled={disabled}
        onChange={onClick}
      />
    </UIGlass>
  );
};
