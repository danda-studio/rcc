import type { FC } from "react";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import { CityBadge } from "@/entities/city";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { ComplexTag } from "../tag";

export const ComplexBanner: FC = () => {
  return (
    <section className={`
      bg-radial-(--radial-7)
      md:bg-radial-(--radial-1)
      h-158
      md:h-250
      text-white
      relative
      rounded-md
      overflow-hidden
    `}
    >

      <Image
        width={980}
        height={1000}
        alt="Hero image"
        src="/images/buildings/1.webp"
        sizes="(max-width: 768px) 832px, 1190px"
        fetchPriority="high"
        priority
        loading="eager"
        className={`
          max-md:hidden
          absolute
          bottom-0
          right-0
          w-245
          h-full
        `}
      />
      <Image
        width={980}
        height={1000}
        alt="Hero image"
        src="/images/buildings/1-md.webp"
        sizes="(max-width: 768px) 832px, 1190px"
        fetchPriority="high"
        priority
        loading="eager"
        className={`
          md:hidden
          absolute
          bottom-0
          right-0
          w-75.25
          h-102
        `}
      />
      <div className={`
        absolute
        left-1/2
        max-md:-translate-x-1/2
        md:left-98
        bottom-0
        w-full
        md:w-480
        h-40
        md:h-72
        overflow-hidden
        bg-liner-8
      `}
      />

      <div className={`
        absolute
        inset-0
        px-3
        md:px-10
        py-8
        max-md:pb-3
        md:py-15
      `}
      >
        <div className={`
          w-full
          h-full
          flex
          flex-col
          items-start
        `}
        >
          <CityBadge
            name="Мариуполь"
            className={`
              mb-4
              md:mb-10
            `}
          />

          <h1 className={`
            text-2xl
            md:text-5xl
            mb-5
            md:mb-7
            font-medium
            -tracking-md
            flex flex-col
            md:w-222
          `}
          >
            <span className="leading-none bg-linear-(--linear-1)
            bg-clip-text
            text-transparent"
            >
              Квартиры
              <br />
              в Новом ЖК
              <br />
            </span>
            <span className="leading-none bg-linear-(--linear-3)
            bg-clip-text
            text-transparent"
            >
              "Олимпийский"
            </span>
          </h1>

          <p
            className={`
              text-md
              md:text-xl
              -tracking-md
            `}
          >
            Дом комфорт класса
          </p>

          <div className="flex max-md:flex-col-reverse md:items-end mt-auto gap-2.25 md:gap-20.75 w-full">
            <ContactFormModalFeature>
              <Button
                className={`
                  max-md:w-full
                `}
                variant="outline"
                size="lg"
              >
                <MousePointerClick />
                Подобрать квартиру
              </Button>
            </ContactFormModalFeature>

            <div className="flex gap-1.75 md:gap-4 max-md:flex-row-reverse">

              <ComplexTag
                className={`
                  w-27.75
                  md:w-52.5
        `}
                title={{
                  middle: "2",
                  end: (
                    <span className="md:text-xl">
                      %
                    </span>
                  ),
                }}
                description="Ипотека"
              />

              <ComplexTag
                className={`
                  max-md:grow
                  md:w-101.75
        `}
                title={{
                  start: "от",
                  middle: "11 500",
                  end: "₽",
                }}
                description="Ежемесячный платеж"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
