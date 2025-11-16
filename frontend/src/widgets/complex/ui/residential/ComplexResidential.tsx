import { House, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UIGlass } from "@/shared/ui/glass";
import { ComplexTag } from "@/widgets/complex/ui/tag";

export const ResidentialWidget = () => {
  const descrtion = (
    <span className={`
      flex items-center justify-center
      md:ml-4
    `}
    >
      <House
        className="mr-4 size-6 shrink-0 text-white"
      />
      <span className={`
        text-base font-medium text-white
        md:text-md
      `}
      >
        Современный дом, где каждая деталь продумана до мелочей
      </span>
    </span>
  );

  return (
    <div className={`
      flex flex-col justify-between gap-x-12 bg-white px-3
      md:flex-row md:pr-14 md:pl-10
    `}
    >
      <div className="max-w-[55.5rem]">
        <h2 className={`
          mb-6 text-lg-x font-medium -tracking-md text-blue-6
          md:text-4-5xl
        `}
        >
          Пространство,
          <br />
          где комфорт встречается с современностью
        </h2>
        <p className={`
          mt-6 max-w-191 text-md-x leading-[1.2] font-medium -tracking-sm
          text-gray-4
        `}
        >
          Современный 12-этажный дом комфорт-класса предлагает удобные 1- и 2-комнатные квартиры с
          продуманными планировками и возможностью создать интерьер по своему вкусу
        </p>

        <div className={`
          mt-10 flex max-w-[28rem] flex-col
          md:mt-20
        `}
        >
          <div className="flex justify-start">
            <div className="flex flex-col items-start">
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
          </div>

          <div className="flex justify-end">
            <div className="flex flex-col">
              <span className={`
                text-5xl font-medium text-blue-6
                md:text-6xl
              `}
              >
                81
              </span>
              <span className={`
                text-md-l font-medium text-blue-6
                md:text-lg
              `}
              >
                Квартир
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`
        flex gap-x-4 pt-10
        max-md:flex-col
        md:pt-0
      `}
      >
        <div className={`
          items-center
          md:justify-self-start
        `}
        >
          <div
            className={`
              relative flex h-[25rem] flex-col justify-between overflow-hidden
              rounded-xs
              md:h-[37.125rem] md:w-[26rem]
            `}
          >
            <div className="absolute inset-0 flex items-center">
              <Image
                src="/images/complex/house.png"
                alt="house"
                width={420}
                height={594}
                className="relative h-full w-full object-cover"
                sizes="(max-width: 360px) 328px, 420px"
              />
              <UIGlass
                className={`
                  absolute top-15 right-8 z-10 p-3
                  md:top-30 md:right-10 md:p-7.5
                `}
                border="corner"
              >
                <ShieldCheck
                  className={`
                    size-6
                    md:size-8
                  `}
                />
              </UIGlass>
              <ComplexTag
                className={`
                  absolute right-4 bottom-4 !max-w-[18rem]
                  md:right-6 md:bottom-6 md:!max-w-[23rem] md:!pr-8
                `}
                title={{
                  start: "",
                  middle: "",
                  end: "",
                }}
                description={descrtion}
              />
            </div>

          </div>
        </div>

        <div className={`
          mt-3 items-center
          md:mt-[42%] md:h-[auto] md:w-110 md:justify-self-end
        `}
        >
          <div
            className={`
              relative flex h-[25rem] w-auto flex-col justify-between
              overflow-hidden rounded-xs border border-gray-11 bg-gray-1 p-6
              text-white
              md:h-[37rem] md:w-110
            `}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className={`
                flex items-baseline pl-6
                md:pl-0
              `}
              >
                <p className={`
                  text-4-6xl font-medium text-blue-6
                  md:text-6xl
                `}
                >
                  2
                </p>
                <p className="ml-1.5 text-2-3xl font-medium text-blue-6">
                  %
                </p>
              </div>

              <div>
                <span className={`
                  text-sm-m font-medium text-gray-4
                  md:text-md-x
                `}
                >
                  Благодаря

                  {" "}
                  <span className={`
                    text-sm-m font-medium text-blue-6
                    md:text-md-x
                  `}
                  >
                    госпрограмме ипотека 2%
                  </span>
                  , покупка квартиры становится реально доступной для каждой семьи
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
