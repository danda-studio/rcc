import type { FC } from "react";
import type { ApartmentDetail } from "./types/ApartmentDetail";
import type { CarouselApi } from "@/shared/lib/shadcn/ui/carousel";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/lib/shadcn/ui/carousel";
import { cn } from "@/shared/lib/shadcn/utils";
import { ProgressiveImage } from "@/shared/ui/progressiveImage/ProgressiveImage";

export const ApartmentCardModalFeatureImageCarousel: FC<ApartmentDetail & {
  className?: string;
}> = ({ image: { carousel }, className }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateProgress = () => {
      const selectedIndex = api.selectedScrollSnap();
      const totalSlides = api.scrollSnapList().length;
      const progressValue = selectedIndex + 1 / (totalSlides);
      setProgress(progressValue);
    };

    api.on("select", updateProgress);
    api.on("reInit", updateProgress);
    updateProgress();

    return () => {
      api.off("select", updateProgress);
      api.off("reInit", updateProgress);
    };
  }, [api]);

  return (
    <div className={cn(`
      flex flex-col items-center gap-2
      md:gap-13
    `, className)}
    >
      <Carousel
        setApi={setApi}
        className="max-w-full overflow-hidden"
        opts={{ align: "start", slidesToScroll: 1 }}
      >
        <CarouselContent className={`
          !ml-0 h-47.5 items-end overflow-visible
          md:h-133.75
        `}
        >
          {carousel.map(image => (
            <CarouselItem
              key={image}
              className="relative h-full w-full !pl-0"
            >
              <ProgressiveImage
                className="h-full w-full object-contain"
                src={image}
                alt="Apartment image"
                width={956}
                height={535}
                objectFit="contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className={`
        mx-auto block h-[3px] w-50 overflow-hidden rounded-full bg-white/49
        md:w-80
      `}
      >
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
