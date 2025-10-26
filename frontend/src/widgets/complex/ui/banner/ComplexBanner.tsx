import type { FC } from "react";
import { MousePointerClick, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { CityBadge } from "@/entities/city";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { UIGlass } from "@/shared/ui/glass";
import { ComplexTag } from "../tag";

export const ComplexBanner: FC = () => {
  return (
    <section className={`
      bg-linear-(--linear-2)
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
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/complex/banner.png"
        priority
        className={`
          absolute
          left-1/2
          max-md:-translate-x-1/2
          md:left-98
          bottom-0
          min-w-208
          md:w-480
          md:h-270
        `}
      />

      {/* <div className={`
        absolute
        left-1/2
        max-md:-translate-x-1/2
        md:left-98
        bottom-0
        w-full
        md:w-400
        h-10
        md:h-30
        overflow-hidden
        blur-lg
      `}
      >
        <Image
          width={192}
          height={108}
          alt="Hero image"
          src="/images/complex/banner.png"
          className={`
            absolute
            bottom-0
            left-0
            min-w-208
            md:min-w-480
            md:min-h-270
          `}
        />
      </div> */}

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
          md:w-222
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
            bg-linear-(--linear-1)
            bg-clip-text
            text-transparent
          `}
          >
            Продажи в новом ЖК "Олимпийский"
          </h1>

          <p
            className={`
              text-md
              md:text-xl
            `}
            style={
              {
                color: "red",
              }
            }
          >
            Место, где хочется жить
          </p>

          <ContactFormModalFeature>
            <Button
              className={`
                max-md:w-full
                mt-auto
              `}
              variant="outline"
              size="lg"
            >
              <MousePointerClick />
              Подобрать квартиру
            </Button>
          </ContactFormModalFeature>
        </div>
      </div>

      <UIGlass
        className={`
          absolute
          right-66.5
          md:right-180.5
          top-76
          md:top-54.5
          p-3
          md:p-7.5
        `}
        border="corner"
      >
        <ShieldCheck className={`
          size-6
          md:size-8
        `}
        />
      </UIGlass>

      <ComplexTag
        className={`
          absolute
          right-3
          md:right-33.5
          top-68.25
          md:top-74.5
        `}
        title={{
          start: "от",
          middle: "11 500",
          end: "₽",
        }}
        description="Платеж по ипотеке"
      />

      <ComplexTag
        className={`
          absolute
          right-58.25
          md:right-153.5
          top-109
          md:top-136.5
        `}
        title={{
          start: "от",
          middle: "2",
          end: (
            <span className="md:text-xl">
              %
            </span>
          ),
        }}
        description="Ипотека"
      />
    </section>
  );
};
