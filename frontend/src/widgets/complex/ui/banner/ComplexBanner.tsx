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
      relative h-158 overflow-hidden rounded-md bg-radial-(--radial-7)
      text-white
      md:h-250 md:bg-radial-(--radial-1)
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
          absolute right-0 bottom-0 h-full w-245
          max-md:hidden
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
          absolute right-0 bottom-0 h-102 w-75.25
          md:hidden
        `}
      />
      <div className={`
        absolute bottom-0 left-1/2 h-40 w-full overflow-hidden
        bg-linear-(--linear-4)
        max-md:-translate-x-1/2
        md:left-98 md:h-72 md:w-480
      `}
      />

      <div className={`
        absolute inset-0 px-3 py-8
        max-md:pb-3
        md:px-10 md:py-15
      `}
      >
        <div className="flex h-full w-full flex-col items-start">
          <CityBadge
            name="Мариуполь"
            className={`
              mb-4
              md:mb-10
            `}
          />

          <h1 className={`
            mb-5 flex flex-col text-2xl font-medium -tracking-md
            md:mb-7 md:w-222 md:text-5xl
          `}
          >
            <span className={`
              bg-linear-(--linear-1) bg-clip-text leading-none text-transparent
            `}
            >
              Квартиры
              <br />
              в Новом ЖК
              <br />
            </span>
            <span className={`
              bg-linear-(--linear-3) bg-clip-text leading-none text-transparent
            `}
            >
              "Олимпийский"
            </span>
          </h1>

          <p
            className={`
              text-md -tracking-md
              md:text-xl
            `}
          >
            Дом комфорт класса
          </p>

          <div className={`
            mt-auto flex w-full gap-2.25
            max-md:flex-col-reverse
            md:items-end md:gap-20.75
          `}
          >
            <ContactFormModalFeature>
              <Button
                className="max-md:w-full"
                variant="outline"
                size="lg"
              >
                <MousePointerClick />
                Подобрать квартиру
              </Button>
            </ContactFormModalFeature>

            <div className={`
              flex items-end gap-1.75
              max-md:flex-row-reverse
              md:gap-4
            `}
            >

              <ComplexTag
                title={{
                  className: "text-center -mr-3 md:-mr-9.25",
                  middle: (
                    <span className={`
                      text-3xl
                      md:text-5xl
                    `}
                    >
                      2
                    </span>
                  ),
                  end: (
                    <span className={`
                      text-lg
                      md:text-4-5xl
                    `}
                    >
                      %
                    </span>
                  ),
                }}
                description={(
                  <span className={`
                    text-md
                    md:text-lg-x
                  `}
                  >
                    Ипотека
                  </span>
                )}
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
