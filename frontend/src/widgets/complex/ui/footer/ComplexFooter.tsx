"use client";
import type { FC } from "react";
import { Map } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/lib/shadcn/ui/button";

export const ComplexFooterWidget: FC = () => {
  return (
    <section className={`
      bg-white
      md:pl-10
      md:pr-10
    `}
    >
      <h1 className={`
        max-md:mx-1
        md:text-center
        font-medium
        mb-6
        text-2-2xl
        -tracking-lg
        md:text-7xl
        md:mb-18.5
        bg-clip-text
        text-transparent
        bg-liner-3
      `}
      >
        Олимпийский
      </h1>

      <div className={`
        flex
        items-start
        md:items-center
        justify-between
        flex-col
        md:flex-row
      `}
      >
        <div className={`
          flex
          ml-2
          md:ml-0
          flex-col
          gap-4
          mb-10
          md:mb-0
        `}
        >
          <Link
            className={`
              text-gray-4
              font-medium
              text
              text-sm-m
              hover:text-gray-700
            `}
            href="#about"
          >
            О проекте
          </Link>
          <Link
            className={`
              text-gray-4
              font-medium
              text
              text-sm-m
              hover:text-gray-700
            `}
            href="#mortgage"
          >
            Ипотека
          </Link>
          <Link
            className={`
              text-gray-4
              font-medium
              text
              text-sm-m
              hover:text-gray-700
            `}
            href="#construction"
          >
            Хронология строительства
          </Link>
          <Link
            className={`
              text-gray-4
              font-medium
              text
              text-sm-m
              hover:text-gray-700
            `}
            href="#catalog"
          >
            Планировки
          </Link>

          <span className={`
            mt-8
            mb-7
            text-gray-4
            font-medium
            text
            hidden
            md:inline
            text-sm-m
          `}
          >
            Офис - г. Мариуполь, улица Артема,58
          </span>

          <span className={`
            font-medium
            md:hidden
            text-lg-x
            leading-[0.92]
            text-blue-6
            -tracking-md
            mt-4
          `}
          >
            +79499046784
          </span>

          <Link
            className={`
              underline
              mt-4
              text-gray-4
              font-medium
              text
              text-sm-m
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
            text-gray-4
            font-medium
            text
            text-sm-m
            hidden
            md:inline
          `}
          >
            © 2025 ООО "СЗ"РСК""
          </span>
        </div>

        <div className={`
          flex
          flex-col
          items-end
        `}
        >
          <span className={`
            font-medium
            hidden
            md:inline
            text-blue-6
            -tracking-md
            text-4-5xl
          `}
          >
            +79499046784
          </span>

          <Link
            className={`
              md:my-10
              underline
              text-gray-4
              font-medium
              text
              text-sm-m
              hover:text-gray-700
              hidden
              md:inline
            `}
            href="#"
          >
            Политика обработки персональных данных
          </Link>

          <span className={`
            md:hidden
            ml-2
            text-gray-4
            font-medium
            text
            text-sm-m
          `}
          >
            © 2025 ООО "СЗ"РСК""
          </span>

          <Button
            onClick={() => window.open("https://yandex.ru/maps/-/CLb8iR0A", "_blank")}
            className={`
              max-w-56
              !hidden
              md:!inline-flex
            `}
            size="sm"
            variant="cart"
          >
            <Map className="text-blue-6" />
            <span className={`
              font-medium
              md:text-md-x
              text-sm-m
            `}
            >
              Мы на карте
            </span>
          </Button>
        </div>
      </div>

      <div className={`
        mx-1
        mt-6
        md:hidden
      `}
      >
        <div className={`
          flex
          items-center
          justify-between
        `}
        >
          <span className={`
            text-gray-4
            font-medium
            text
            text-sm-m
          `}
          >
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
