"use client";
import type { CarouselApi } from "@/shared/lib/shadcn/ui/carousel";
import React, { useEffect, useState } from "react";
import { CarouselCard } from "@/shared";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/lib/shadcn/ui/carousel";

export const ComplexConstructionWidget = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      image: "/images/complex/carousel/Q1.webp",
      year: "I-кв 2025",
      title: "Подготовительные работы",
      description: "Разметка участка, вынос коммуникаций, установка ограждений, организация строительной площадки и начало земляных работ",
    },
    {
      image: "/images/complex/carousel/Q2.webp",
      year: "II-кв 2025",
      title: "Фундамент",
      description: "Заливка монолитного фундамента, возведение несущих конструкции, гидроизоляция фундаментной плиты и стен",
    },
    {
      image: "/images/complex/carousel/Q3.webp",
      year: "III-кв 2025",
      title: "Возведение несущего каркаса",
      description: "Монтаж инженерных внутридомовых коммуникаций, устройство монолитных работ стен и перекрытий",
    },
    {
      image: "/images/complex/carousel/Q4.webp",
      year: "IV-кв 2025",
      title: "Фасад, кровля и отделка МОПОВ",
      description: "Облицовка фасада. Монтаж окон и дверей, монтаж инженерного оборудования. Отделочные работы в местах общего пользования.",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateProgress = () => {
      const selectedIndex = api.selectedScrollSnap();
      const totalSlides = api.scrollSnapList().length;
      const progressValue = totalSlides > 1 ? selectedIndex / (totalSlides - 1) : 0;
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
    <div className={`
      px-3
      md:px-10
    `}
    >
      <div className={`
        max-w-[43.5rem] pb-10
        md:pb-20
      `}
      >
        <h2 className={`
          mb-6 text-lg-x font-medium text-blue-6
          md:text-4-5xl
        `}
        >
          Хронология строительства
        </h2>
        <p className={`
          mt-6 text-sm-m font-medium text-gray-4
          md:text-md-x
        `}
        >
          Следите за каждым этапом — от фундамента до новоселья. Прозрачность, стабильные темпы и качество на каждом шаге это основа подхода РСК
        </p>
      </div>

      <Carousel
        setApi={setApi}
        className={`
          -mx-4 max-w-[100vw] overflow-hidden
          md:-mx-14
        `}
        opts={{ align: "start", slidesToScroll: 1 }}
      >
        <CarouselContent className={`
          !ml-0 items-end overflow-visible
          md:h-[40.25rem]
        `}
        >
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className={`
                !basis-79 pl-4
                last:!basis-83
                md:!basis-114 md:first:!basis-124 md:first:pl-14
                md:last:!basis-128 md:last:pr-14
              `}
            >
              <CarouselCard {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className={`
        mx-auto mt-4 block h-[3px] w-full max-w-[90vw] overflow-hidden
        rounded-full bg-[#A5A5A636]
        md:hidden
      `}
      >
        <div
          className="h-full bg-gray-6 transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
