import type { FC } from "react";
import type { ApartmentCarouselSelectProps } from "./types";
import { useMemo } from "react";
import { Carousel, CarouselContent } from "@/shared/lib/shadcn/ui/carousel";
import { cn } from "@/shared/lib/shadcn/utils";
import { ApartmentCarouselSelectItem } from "./ApartmentCarouselSelectItem";

export const ApartmentCarouselSelect: FC<ApartmentCarouselSelectProps> = ({
  items,
  value,
  onChange,
  className,
  contentClassName,
}) => {
  const startIndex = useMemo(() => items.findIndex(i => i.id === value), [items, value]);
  return (
    <Carousel
      opts={{
        startIndex,
      }}
      className={className}
    >
      <CarouselContent
        className={cn(`
          items-center
          max-md:!ml-0
        `, contentClassName)}
      >
        {items.map(i => (
          <ApartmentCarouselSelectItem
            key={i.id}
            {...i}
            checked={value === i.id}
            onClick={() => onChange(i.id)}
          />
        ))}
      </CarouselContent>
    </Carousel>
  );
};
