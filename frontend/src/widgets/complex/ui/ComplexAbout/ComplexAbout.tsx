"use client";

import React, {FC} from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/lib/shadcn/ui/carousel";

export const ComplexAboutWidget: FC = () => {
    return (
        <section className="relative w-full py-10 md:py-20 bg-white">
            <Carousel
                className="max-w-[100vw] overflow-hidden"
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
            >
                {/* ✅ фиксированная высота в ремах, центрирование и видимость overflow */}
                <CarouselContent className="-ml-[1rem] md:h-[40.25rem] items-end overflow-visible carousel-pattern">
                    {/* 1 */}
                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-[1rem]">
                        <div
                            className={`
                            rounded-xs
                                bg-liner-5 relative flex flex-col justify-between w-[18.75] md:w-80 md:h-[28.375rem] overflow-hidden p-6 text-white bg-gray-1
                             `}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <div className="pl-6 md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl font-medium text-white">2</p>
                                        <p className="ml-1.5 text-2-6xl font-medium text-white">%</p>
                                    </div>
                                </div>

                                <div>
                                     <span className="text-sm-m md:text-lg font-medium text-white">
                                        Доступная ипотека по  госпрограмме
                                     </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* 2 */}
                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-[1rem]">
                        <div
                            className="
      rounded-xs relative flex flex-col justify-between
      w-auto md:w-80 md:h-[28.375rem] overflow-hidden
      p-6 text-white bg-gray-1 bg-liner-4
    "
                        >
                            <Image
                                src="/images/complex/carousel/people.png"
                                alt="people"
                                width={400}
                                height={400}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[100%] object-contain z-0"
                            />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <p className="font-medium text-lg">Первоначальный взнос</p>
                                </div>

                                <div>
                                    <div className="pl-6 md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl font-medium text-white">10</p>
                                        <p className="ml-1.5 text-2-6xl font-medium text-white">%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* 3 */}
                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-3">
                        <div
                            className={`
                            rounded-xs
                               bg-blue-6 relative flex flex-col justify-between w-auto md:w-80 md:h-[28.375rem] overflow-hidden p-6 text-white
                             `}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <p className="md:text-4-6xl font-medium text-white">5</p>
                                    <p className="ml-1.5 text-2-6xl font-medium text-white">минут</p>
                                </div>

                                <div>
                                    <span className="text-sm-m md:text-lg font-medium text-white">
                                       До центра
                                     </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-[1rem]">
                        <div
                            className="
      rounded-xs relative flex flex-col justify-between
      w-auto md:w-80 md:h-[28.375rem] overflow-hidden
      p-6 text-white bg-gray-1 bg-liner-4
    "
                        >
                            <Image
                                src="/images/complex/carousel/car.png"
                                alt="car"
                                width={891}
                                height={491}
                                className="absolute justify-end  left-1/2 -translate-x-1/2 w-auto h-[100%] object-cover z-0"
                            />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <p className="font-medium text-lg">Первоначальный взнос</p>
                                </div>

                                <div>
                                    <div className="pl-6 md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl font-medium text-white">10</p>
                                        <p className="ml-1.5 text-2-6xl font-medium text-white">%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-[1rem]">
                        <div
                            className={`
                            rounded-xs
                                bg-liner-5 relative flex flex-col justify-between w-auto md:w-80 md:h-[28.375rem] overflow-hidden p-6 text-white bg-gray-1
                             `}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <div className="pl-6 md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl font-medium text-white">3</p>
                                    </div>
                                </div>

                                <div>
                                     <span className="text-sm-m md:text-lg font-medium text-white">
                                        Зоны отдыха
                                     </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-[60%] md:basis-[18%] pl-[1rem]">
                        <div
                            className="
      rounded-xs relative flex flex-col justify-between
      w-auto md:w-80 md:h-[28.375rem] overflow-hidden
      p-6 text-white bg-gray-1 bg-liner-4
    "
                        >
                            <Image
                                src="/images/complex/carousel/house.png"
                                alt="people"
                                width={400}
                                height={400}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-auto object-contain z-0"
                            />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="pl-6 md:pl-0 flex items-baseline">
                                    <p className="font-medium text-lg">Безопастность</p>
                                </div>

                                <div>
                                    <div className="pl-6 md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl font-medium text-white">24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                </CarouselContent>

                <CarouselPrevious className="hidden md:flex"/>
                <CarouselNext className="hidden md:flex"/>
            </Carousel>
        </section>
    );
};
