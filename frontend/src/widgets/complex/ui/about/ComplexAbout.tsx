"use client";

import type { FC } from "react";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/lib/shadcn/ui/carousel";

export const ComplexAboutWidget: FC = () => {
  return (
    <section className={`
      relative w-full bg-white px-3
      md:px-10
    `}
    >
      <div className={`
        max-w-[44.5rem] pb-10
        md:pb-20
      `}
      >

        <h2 className={`
          mb-6 text-lg-x font-medium text-blue-6
          md:text-4-5xl
        `}
        >
          О нашем проекте подробнее
        </h2>
        <p className={`
          mt-6 text-sm-m font-medium text-gray-4
          md:text-md-x
        `}
        >
          ЖК "Олимпийский" - это идеальное место для жизни, где гармонично сочетаются

          {" "}
          <span className={`
            text-sm-m font-medium text-blue-6
            md:text-md-x
          `}
          >
            современные технологии и
            эстетика
          </span>
          , обеспечивая комфорт и уют каждому жителю
        </p>
      </div>

      <Carousel
        className={`
          -mx-4 w-screen overflow-hidden
          md:-mx-14
        `}
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className={`
          carousel-pattern !ml-0 items-end overflow-visible
          md:h-[40.25rem]
        `}
        >
          {/* 1 */}
          <CarouselItem className={`
            !basis-79 pl-4
            md:!basis-94 md:pl-14
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-gray-1 bg-radial-(--radial-8) p-6
                text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-4-6xl font-medium text-white
                    md:text-4-6xl
                  `}
                  >
                    2
                  </p>
                  <p className={`
                    ml-1.5 justify-end text-xl font-medium text-white
                    md:text-2-6xl
                  `}
                  >
                    %
                  </p>
                </div>

                <div>
                  <span className={`
                    text-sm-m font-medium text-white
                    md:text-lg
                  `}
                  >
                    Доступная ипотека по  госпрограмме
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* 2 */}
          <CarouselItem className={`
            !basis-79 pl-4
            md:!basis-84
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-gray-1 bg-linear-(--linear-6) p-6
                text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <Image
                src="/images/complex/carousel/people.png"
                alt="people"
                width={400}
                height={400}
                className={`
                  absolute -bottom-28 left-1/2 z-0 h-[100%] w-auto
                  -translate-x-1/2 object-contain
                `}
              />

              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-md font-medium
                    md:text-lg
                  `}
                  >
                    Первоначальный взнос
                  </p>
                </div>

                <div>
                  <div className={`
                    flex items-baseline
                    md:pl-0
                  `}
                  >
                    <p className={`
                      text-4-6xl font-medium text-white
                      md:text-4-6xl
                    `}
                    >
                      10
                    </p>
                    <p className={`
                      ml-1.5 text-xl font-medium text-white
                      md:text-2-6xl
                    `}
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* 3 */}
          <CarouselItem className={`
            !basis-79 pl-3
            md:!basis-84
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-blue-6 p-6 text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-4-6xl font-medium text-white
                    md:text-4-6xl
                  `}
                  >
                    10
                  </p>
                  <p className={`
                    ml-1.5 text-xl font-medium text-white
                    md:text-2-6xl
                  `}
                  >
                    минут
                  </p>
                </div>

                <div>
                  <span className={`
                    text-sm-m font-medium text-white
                    md:text-lg
                  `}
                  >
                    До центра
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className={`
            !basis-79 pl-4
            md:!basis-84
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-gray-1 bg-linear-(--linear-6) p-6
                text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <Image
                src="/images/complex/carousel/car.png"
                alt="car"
                width={891}
                height={491}
                className={`
                  absolute left-1/2 z-0 h-[100%] w-auto -translate-x-1/2
                  justify-end object-cover
                `}
              />

              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-4-6xl font-medium text-white
                    md:text-4-6xl
                  `}
                  >
                    58
                  </p>
                </div>

                <div>
                  <div className={`
                    flex items-baseline
                    md:pl-0
                  `}
                  >
                    <span className={`
                      text-sm-m font-medium text-white
                      md:text-lg
                    `}
                    >
                      Парковочных мест
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className={`
            !basis-79 pl-4
            md:!basis-84
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-gray-1 bg-radial-(--radial-8) p-6
                text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-4-6xl font-medium text-white
                    md:text-4-6xl
                  `}
                  >
                    3
                  </p>
                </div>

                <div>
                  <span className={`
                    text-sm-m font-medium text-white
                    md:text-lg
                  `}
                  >
                    Зоны отдыха
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className={`
            !basis-83 pr-4 pl-4
            md:!basis-98 md:pr-14
          `}
          >
            <div
              className={`
                relative flex h-[21.25rem] w-75 flex-col justify-between
                overflow-hidden rounded-xs bg-gray-1 bg-linear-(--linear-6) p-6
                text-white
                md:h-[28.375rem] md:w-80
              `}
            >
              <Image
                src="/images/complex/carousel/house.png"
                alt="people"
                width={400}
                height={400}
                className={`
                  absolute bottom-0 left-1/2 z-0 h-auto w-auto -translate-x-1/2
                  object-contain
                `}
              />

              <div className={`
                relative z-10 flex h-full flex-col justify-between
              `}
              >
                <div className={`
                  flex items-baseline
                  md:pl-0
                `}
                >
                  <p className={`
                    text-4-6xl font-medium text-white
                    md:text-4-6xl
                  `}
                  >
                    5
                  </p>
                  <p className={`
                    ml-1.5 text-xl font-medium text-white
                    md:text-2-6xl
                  `}
                  >
                    минут
                  </p>
                </div>

                <div>
                  <div className={`
                    flex items-baseline
                    md:pl-0
                  `}
                  >
                    <span className={`
                      text-sm-m font-medium text-white
                      md:text-lg
                    `}
                    >
                      На автомобиле к морю
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious className={`
          hidden
          md:flex
        `}
        />
        <CarouselNext className={`
          hidden
          md:flex
        `}
        />
      </Carousel>
    </section>
  );
};
