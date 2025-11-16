"use client";
import type { FC } from "react";
import { Map } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/lib/shadcn/ui/button";

export const ComplexFooterWidget: FC = () => {
  return (
    <section className={`
      bg-white
      md:pr-10 md:pl-10
    `}
    >
      <h1 className={`
        mb-6 bg-linear-(--linear-5) bg-clip-text text-2-2xl font-medium
        -tracking-lg text-transparent
        max-md:mx-1
        md:mb-18.5 md:text-center md:text-7xl
      `}
      >
        Олимпийский
      </h1>

      <div className={`
        flex flex-col items-start justify-between
        md:flex-row md:items-center
      `}
      >
        <div className={`
          mb-10 ml-2 flex flex-col gap-4
          md:mb-0 md:ml-0
        `}
        >
          <Link
            className={`
              text-sm-m font-medium text-gray-4
              hover:text-gray-700
            `}
            href="#about"
          >
            О проекте
          </Link>
          <Link
            className={`
              text-sm-m font-medium text-gray-4
              hover:text-gray-700
            `}
            href="#mortgage"
          >
            Ипотека
          </Link>
          <Link
            className={`
              text-sm-m font-medium text-gray-4
              hover:text-gray-700
            `}
            href="#construction"
          >
            Хронология строительства
          </Link>
          <Link
            className={`
              text-sm-m font-medium text-gray-4
              hover:text-gray-700
            `}
            href="#catalog"
          >
            Планировки
          </Link>

          <span className={`
            mt-8 mb-7 hidden text-sm-m font-medium text-gray-4
            md:inline
          `}
          >
            Офис - г. Мариуполь, улица Артема,58
          </span>

          <span className={`
            mt-4 text-lg-x leading-[0.92] font-medium -tracking-md text-blue-6
            md:hidden
          `}
          >
            +79499046784
          </span>

          <Link
            className={`
              mt-4 text-sm-m font-medium text-gray-4 underline
              hover:text-gray-700
              md:hidden
            `}
            href="#"
          >
            Политика обработки персональных данных
          </Link>
        </div>

        <div>
          <span className={`
            hidden text-sm-m font-medium text-gray-4
            md:inline
          `}
          >
            © 2025 ООО "СЗ"РСК""
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className={`
            hidden text-4-5xl font-medium -tracking-md text-blue-6
            md:inline
          `}
          >
            +79499046784
          </span>

          <Link
            className={`
              hidden text-sm-m font-medium text-gray-4 underline
              hover:text-gray-700
              md:my-10 md:inline
            `}
            href="#"
          >
            Политика обработки персональных данных
          </Link>

          <span className={`
            ml-2 text-sm-m font-medium text-gray-4
            md:hidden
          `}
          >
            © 2025 ООО "СЗ"РСК""
          </span>

          <Button
            onClick={() => window.open("https://yandex.ru/maps/-/CLb8iR0A", "_blank")}
            className={`
              !hidden max-w-56
              md:!inline-flex
            `}
            size="sm"
            variant="cart"
          >
            <Map className="text-blue-6" />
            <span className={`
              text-sm-m font-medium
              md:text-md-x
            `}
            >
              Мы на карте
            </span>
          </Button>
        </div>
      </div>

      <div className={`
        mx-1 mt-6
        md:hidden
      `}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm-m font-medium text-gray-4">
            Офис - г. Мариуполь, улица Артема,58
          </span>

          <Button className="max-w-56" size="sm" variant="cart">
            <Map className="text-blue-6" />
            Мы на карте
          </Button>
        </div>
      </div>
    </section>
  );
};
