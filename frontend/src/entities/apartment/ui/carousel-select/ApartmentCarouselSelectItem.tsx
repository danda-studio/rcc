import type { FC } from "react";
import type { ApartmentCarouselSelectItemProps } from "./types";
import { CarouselItem } from "@/shared/lib/shadcn/ui/carousel";
import { ApartmentCarouselSelectItemContent } from "./ApartmentCarouselSelectItemContent";

export const ApartmentCarouselSelectItem: FC<ApartmentCarouselSelectItemProps> = (props) => {
  return (
    <CarouselItem
      className={`
        max-md:last:!basis-76
        max-md:first:!basis-76
        !basis-64
        has-[input:checked]:!basis-74
        max-md:last:has-[input:checked]:!basis-81
        max-md:first:has-[input:checked]:!basis-81
        md:has-[input:checked]:!basis-84
        max-md:last:has-[input:checked]:pr-9
        max-md:first:has-[input:checked]:pl-9
        max-md:first:pl-14
        max-md:last:pr-14
        max-md:pl-2
        max-md:pr-2
      `}
    >
      <ApartmentCarouselSelectItemContent {...props} />
    </CarouselItem>
  );
};
