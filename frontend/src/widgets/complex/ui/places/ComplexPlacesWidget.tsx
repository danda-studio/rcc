import type { FC } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/lib/shadcn/ui/carousel";
import { cn } from "@/shared/lib/shadcn/utils";
import { PLACES } from "./consts/places";

export const ComplexPlacesWidget: FC = () => {
  return (
    <div className={`
      mx-3
      md:mx-10
    `}
    >
      <h2 className={`
        mb-6 text-lg-x font-medium -tracking-md text-blue-6
        max-md:mr-2
        md:text-4-5xl
      `}
      >
        Всё под рукой
      </h2>

      <p className={`
        mb-10 max-w-191 text-base leading-[1.2] font-medium -tracking-sm
        text-gray-4
        max-md:mr-2 max-md:mb-10
        md:mb-20 md:w-172.75 md:text-md-x
      `}
      >
        Развитая инфраструктура района включает магазины, школы, детские сады и поликлиники — всё необходимое для комфортной жизни в шаговой доступности.
      </p>

      <div className={`
        grid grid-cols-3 gap-4
        max-md:hidden
      `}
      >
        {PLACES.map(({ name, image }) => (
          <div
            key={name}
            className={`
              relative flex h-105 items-center justify-center overflow-hidden
              rounded-md
            `}
          >
            <Image
              src={image}
              alt={name}
              width={592}
              height={420}
              className="h-full w-full object-cover"
            />
            <div
              className={`
                absolute inset-x-0 top-0 h-50 rotate-180 bg-linear-(--linear-9)
              `}
            />
            <div
              className={`
                absolute inset-x-0 bottom-0 h-50 bg-linear-(--linear-9)
              `}
            />
            <div className={`
              absolute inset-x-0 bottom-0 m-6 text-lg font-medium
              md:m-8 md:text-2-6xl
            `}
            >
              {name}
            </div>
          </div>
        ))}
      </div>

      <Carousel className={`
        -mx-4
        md:hidden
      `}
      >
        <CarouselContent className={cn(`
          items-center overflow-visible
          max-md:ml-0!
        `)}
        >
          {PLACES.map(({ name, image }) => (
            <CarouselItem
              key={name}
              className={`
                basis-85! px-1.5!
                first:basis-87.5! first:pl-4!
                last:basis-87.5! last:pr-4!
              `}
            >
              <div
                className={`
                  relative flex h-89 w-82 items-center justify-center
                  overflow-hidden rounded-md
                `}
              >
                <Image
                  src={image}
                  alt={name}
                  width={592}
                  height={420}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`
                    absolute inset-x-0 top-0 h-50 rotate-180
                    bg-linear-(--linear-9)
                  `}
                />
                <div
                  className={`
                    absolute inset-x-0 bottom-0 h-50 bg-linear-(--linear-9)
                  `}
                />
                <div className={`
                  absolute inset-x-0 bottom-0 m-6 text-lg font-medium
                  md:m-8 md:text-2-6xl
                `}
                >
                  {name}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
