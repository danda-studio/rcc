import type { FC } from "react";
import type { ApartmentCarouselSelectItemProps } from "./types";
import { CarouselItem } from "@/shared/lib/shadcn/ui/carousel";
import { ApartmentCarouselSelectItemContent } from "./ApartmentCarouselSelectItemContent";

export const ApartmentCarouselSelectItem: FC<ApartmentCarouselSelectItemProps> = (props) => {
  return (
    <CarouselItem className={`
      md:!basis-64
      has-[input:checked]:!basis-84
    `}
    >
      <ApartmentCarouselSelectItemContent {...props} />
    </CarouselItem>
  );
};
