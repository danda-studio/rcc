import type { FC } from "react";
import Image from "next/image";
import { ContactFormFeature } from "@/features/contact";

export const ContactFormWidget: FC = () => {
  return (
    <section className={`
      relative -mt-12 h-208 overflow-hidden rounded-md border-gray-7 bg-gray-1
      md:-mt-24 md:h-193.75
    `}
    >
      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/complex/banner.webp"
        className={`
          absolute -bottom-22.5 -left-82 min-h-80 min-w-180
          md:-bottom-30 md:left-10 md:h-224 md:w-480
        `}
      />

      <div className={`
        absolute inset-0 px-4 py-8
        md:px-10 md:py-15
      `}
      >
        <div className={`
          w-80
          md:w-120.5
        `}
        >
          <h2 className={`
            mb-7 text-lg-x font-medium text-blue-6
            md:mb-4 md:text-4-5xl
          `}
          >
            Готовы к
            <br />
            новоселью?
          </h2>

          <p className={`
            mb-7 text-base leading-[1.2] font-medium text-gray-4
            md:mb-15 md:text-md-x
          `}
          >
            Оставьте заявку  - Наши специалист поможет подобрать квартиру мечты в
            {" "}
            <br />
            <span className="text-blue-6"> ЖК «Олимпийский»</span>
            <br />
            Выгодные инвестиции под 2%
          </p>

          <ContactFormFeature />

          <p className={`
            mt-3.5 max-w-86 text-xxs text-gray-4
            md:text-xs
          `}
          >
            Оставляя заявку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </div>
      </div>
    </section>
  );
};
