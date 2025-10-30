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
      image: "/images/complex/carousel/Q1.png",
      year: "Q1 2025",
      title: "Подготовительные работы",
      description: "Разметка участка, вынос коммуникаций, установка ограждений, организация строительной площадки и начало земляных работ",
    },
    {
      image: "/images/complex/carousel/Q2.png",
      year: "Q2 2025",
      title: "Фундамент и каркас здания",
      description: "Заливка монолитного фундамента, возведение несущих конструкций и перекрытий. Работы по устройству кровли",
    },
    {
      image: "/images/complex/carousel/Q3.png",
      year: "Q3 2025",
      title: "Фасад и инженерные системы",
      description: "Монтаж фасадов, окон, инженерных коммуникаций, систем электроснабжения, отопления и водоснабжения",
    },
    {
      image: "/images/complex/carousel/Q4.png",
      year: "Q4 2025",
      title: "Внутренняя отделка и благоустройство",
      description: "Отделочные работы в местах общего пользования, установка лифтов, озеленение территории, укладка плитки, монтаж освещения и детских площадок",
    },
    /*    {
      image: "/images/complex/carousel/Q5.png",
      year: "Q4 2025",
      title: "Финальный этап",
      description: "Проверка всех систем, приёмка дома, подготовка документов и ввод объекта в эксплуатацию",
    } */
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
        max-w-[43.5rem]
        pb-10
        md:pb-20
      `}
      >
        <h2 className={`
          text-lg-x
          mb-6
          font-medium
          text-blue-6
          md:text-4-5xl
        `}
        >
          Хронология строительства
        </h2>
        <p className={`
          text-sm-m
          md:text-md-x
          text-gray-4
          font-medium
          mt-6
        `}
        >
          Следите за каждым этапом — от фундамента до новоселья. Прозрачность, стабильные темпы и качество на каждом шаге это основа подхода РСК
        </p>
      </div>

      <Carousel
        setApi={setApi}
        className={`
          -mx-4
          md:-mx-14
          max-w-[100vw]
          overflow-hidden
        `}
        opts={{ align: "start", slidesToScroll: 1 }}
      >
        <CarouselContent className={`
          !ml-0
          md:h-[40.25rem]
          items-end
          overflow-visible
        `}
        >
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className={`
                md:last:pr-14
                md:first:pl-14
                pl-4
                !basis-79
                last:!basis-83
                md:last:!basis-128
                md:first:!basis-124
                md:!basis-114
              `}
            >
              <CarouselCard {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className={`
        mt-4
        block
        md:hidden
        w-full
        max-w-[90vw]
        mx-auto
        h-[3px]
        bg-[#A5A5A636]
        rounded-full
        overflow-hidden
      `}
      >
        <div
          className={`
            h-full
            bg-gray-6
            transition-all
            duration-300
            ease-out
          `}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
