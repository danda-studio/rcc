import Image from "next/image";
import React from "react";

export const ResidentialWidget = () => {
  return (
    <div className={`
      flex flex-col gap-x-12 bg-white px-3
      md:h-221.5 md:flex-row md:px-10
    `}
    >
      <div className={`
        flex flex-col
        max-md:mb-10
      `}
      >
        <h2 className={`
          mb-6 text-lg-x font-medium -tracking-md text-blue-6
          max-md:mr-2
          md:w-210.25 md:text-4-5xl
        `}
        >
          Комфортное
          <br />
          пространство для жизни
        </h2>
        <p className={`
          max-w-191 text-base leading-[1.2] font-medium -tracking-sm text-gray-4
          max-md:mr-2 max-md:mb-10
          md:w-173.75 md:text-md-x
        `}
        >
          Современный дом комфорт-класса, квартиры свободной планировки и с возможностью создавать интерьер
          по своему вкусу
        </p>

        <div className={`
          mt-auto flex flex-col
          md:w-103.25
        `}
        >
          <div className={`
            flex flex-col self-start
            md:mb-26
          `}
          >
            <span className={`
              text-5xl font-medium text-blue-6
              md:text-6xl
            `}
            >
              12
            </span>
            <span className={`
              text-md-l font-medium text-blue-6
              md:text-lg
            `}
            >
              Этажей
            </span>
          </div>

          <div className="flex flex-col self-end">
            <span className={`
              text-5xl font-medium text-blue-6
              md:text-6xl
            `}
            >
              81
            </span>
            <span className={`
              text-md-l font-medium -tracking-md text-blue-6
              md:text-lg
            `}
            >
              Квартира
            </span>
          </div>
        </div>
      </div>

      <div className={`
        flex shrink-0 gap-3
        max-md:flex-col
        md:-ml-78.25 md:gap-4
      `}
      >
        <div className={`
          flex h-100 w-82 items-center justify-center overflow-hidden rounded-md
          md:h-148.5 md:w-104 md:self-end
        `}
        >
          <Image
            src="/images/renders/2.webp"
            alt="Render 1"
            width={416}
            height={594}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`
            flex flex-col
            md:gap-8 md:self-start
          `}
        >

          <div
            className={`
              relative flex h-100 w-82 items-center justify-center
              overflow-hidden rounded-md
              md:h-148.5 md:w-104
            `}
          >
            <Image
              src="/images/renders/3.webp"
              alt="Render 2"
              width={416}
              height={594}
              className="h-full w-full object-cover"
            />
            <div
              className={`
                absolute inset-x-0 top-0 h-50 rotate-180 bg-linear-(--linear-8)
              `}
            />
            <div
              className={`
                absolute inset-x-0 bottom-0 h-50 bg-linear-(--linear-8)
              `}
            />
            <div className={`
              absolute inset-x-0 bottom-0 m-6 text-md-x font-medium -tracking-sm
              md:m-8 md:text-lg
            `}
            >
              Надежные
              <br />
              и современные лифты
            </div>
          </div>
          <div className={`
            text-base font-medium -tracking-sm text-gray-4
            max-md:mt-3
            md:my-8 md:ml-8 md:text-md-x
          `}
          >
            Качество, безопасность
            <br />
            и комфорт
          </div>
        </div>
        <div
          className={`
            flex flex-col
            max-md:flex-col-reverse
            md:gap-8 md:self-end
          `}
        >
          <div className={`
            text-base font-medium -tracking-sm text-gray-4
            max-md:mt-3
            md:my-8 md:ml-8 md:text-md-x
          `}
          >
            Мы создали атмосферу, в
            {" "}
            <br className="max-md:hidden" />
            которую
            {" "}
            <br className="md:hidden" />
            хочется возвращаться
          </div>
          <div
            className={`
              relative flex h-100 w-82 items-center justify-center
              overflow-hidden rounded-md
              md:mb-15 md:h-148.5 md:w-104
            `}
          >
            <Image
              src="/images/renders/4.webp"
              alt="Render 3"
              width={416}
              height={594}
              className="h-full w-full object-cover"
            />
            <div
              className={`
                absolute inset-x-0 top-0 h-50 rotate-180 bg-linear-(--linear-8)
              `}
            />
            <div
              className={`
                absolute inset-x-0 bottom-0 h-50 bg-linear-(--linear-8)
              `}
            />
            <div className={`
              absolute inset-x-0 bottom-0 m-6 text-md-x font-medium -tracking-sm
              md:m-8 md:text-lg
            `}
            >
              Продуманный дизайн
              <br />
              и удобные места общего пользования
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
