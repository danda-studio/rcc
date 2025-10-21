import type { FC } from "react";
import Image from "next/image";
import { ContactFormFeature } from "@/features/contact";

export const ContactFormWidget: FC = () => {
  return (
    <section className={`
    -mt-12
    md:-mt-24
      relative
      overflow-hidden
      bg-gray-1
      border-gray-7
      rounded-md
      h-208
      md:h-193.75
    `}
    >
      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/complex/banner.png"
        className={`
          absolute
          -left-51.75
          md:left-95.5
          -bottom-22.5
          md:-bottom-30
          min-w-191.5
          md:w-480
          min-h-107.75
          md:h-270
        `}
      />

      <div className={`
        absolute
        inset-0
        px-4
        md:px-10
        py-8
        md:py-15
      `}
      >
        <div className={`
          w-80
          md:w-120.5
        `}
        >
          <h2 className={`
            font-medium
            text-blue-6
            text-lg-x
            md:text-4-5xl
            mb-7
            md:mb-4
          `}
          >
            Готовы к
            <br />
            новоселью?
          </h2>

          <p className={`
            text-gray-4
            font-medium
            leading-[1.2]
            text-base
            md:text-md-x
            md:mb-15
            mb-7
            `}
          >
            Оставьте заявку — и наш специалист поможет выбрать квартиру в
            <span className="text-blue-6"> ЖК «Олимпийский» </span>
            под ваши цели и бюджет
          </p>

          <ContactFormFeature />

          <p className='mt-3.5 max-w-86 text-xxs text-gray-4 md:text-xs'>Оставляя заявку, вы соглашаетесь с условиями обработки персональных данных</p>
        </div>
      </div>
    </section>
  );
};
