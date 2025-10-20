import type { FC } from "react";
import type { ApartmentCarouselSelectProps } from "./types";
import { Carousel, CarouselContent } from "@/shared/lib/shadcn/ui/carousel";
import { cn } from "@/shared/lib/shadcn/utils";
import { ApartmentCarouselSelectItem } from "./ApartmentCarouselSelectItem";

export const ApartmentCarouselSelect: FC<ApartmentCarouselSelectProps> = ({ items, value, onChange, className }) => {
  return (
    <Carousel>
      <CarouselContent className={cn(`
        overflow-visible
        justify-center
        items-center
      `, className)}
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
