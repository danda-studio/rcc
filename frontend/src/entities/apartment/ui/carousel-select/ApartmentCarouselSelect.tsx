import type { FC } from "react";
import type { ApartmentCarouselSelectProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useMemo } from "react";
import { Button } from "@/shared/lib/shadcn/ui/button";
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

  const onNext = useCallback(() => {
    const id = items.at(startIndex + 1)?.id;
    if (id) {
      onChange(id);
    }
  }, [items, onChange, startIndex]);

  const onBack = useCallback(() => {
    const id = items.at(startIndex - 1)?.id;
    if (id) {
      onChange(id);
    }
  }, [items, onChange, startIndex]);

  return (
    <div
      className={className}
    >
      <Carousel
        opts={{
          startIndex,
        }}
      >
        <CarouselContent
          className={cn(`
            items-center overflow-visible
            max-md:ml-0!
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

      <div className={`
        mt-8 flex justify-center gap-2
        md:mt-10
      `}
      >
        <Button type="button" disabled={startIndex < 1} variant="fill" size="icon" onClick={onBack}>
          <ChevronLeft />
        </Button>
        <Button type="button" disabled={startIndex > items.length - 2} variant="fill" size="icon" onClick={onNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
