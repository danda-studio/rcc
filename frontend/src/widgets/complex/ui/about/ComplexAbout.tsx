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
        <section className="relative w-full pl-3   bg-white md:ml-10">
            <div className="max-w-[44.5rem] pb-10 md:pb-20">

                <h2 className="text-lg-x mb-6 font-medium text-blue-6 md:text-4-5xl">
                    О нашем проекте подробнее
                </h2>
                <p className="md:text-md-x text-sm-m text-gray-4 font-medium mt-6">
                    ЖК "Олимпийский" - это идеальное место для жизни, где гармонично сочетаются{''} <span className='text-sm-m text-blue-6 font-medium md:text-md-x'>современные технологии и
                    эстетика</span>, обеспечивая комфорт и уют каждому жителю
                </p>
            </div>

            <Carousel
                className="max-w-[100vw] overflow-hidden -mr-1"
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
            >
                <CarouselContent className="-ml-[1rem]  md:h-[40.25rem] items-end overflow-visible carousel-pattern">
                    {/* 1 */}
                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-[1rem]">
                        <div
                            className="rounded-xs bg-liner-5 relative flex flex-col justify-between w-[18.75rem] md:w-80
                           h-[21.25rem] md:h-[28.375rem] overflow-hidden p-6 text-white bg-gray-1
                             "
                        >
                            <div className="relative  z-10 flex flex-col justify-between h-full">
                                    <div className="md:pl-0 flex items-baseline">
                                        <p className="md:text-4-6xl text-4-6xl font-medium text-white">2</p>
                                        <p className="ml-1.5  text-xl md:text-2-6xl justify-end font-medium text-white">%</p>
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
                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-[1rem]">
                        <div
                            className="
                            h-[21.25rem] w-[18.75rem] md:w-80 md:h-[28.375rem]
                            rounded-xs relative flex flex-col justify-between
                            overflow-hidden
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
                                <div className="md:pl-0 flex items-baseline">
                                    <p className="font-medium text-md md:text-lg">Первоначальный взнос</p>
                                </div>

                                <div>
                                    <div className=" md:pl-0 flex items-baseline">
                                        <p className="text-4-6xl md:text-4-6xl font-medium text-white">10</p>
                                        <p className="ml-1.5 text-xl md:text-2-6xl font-medium text-white">%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* 3 */}
                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-3">
                        <div
                            className={`
                            rounded-xs h-[21.25rem] w-[18.75rem] md:w-80 md:h-[28.375rem]
                               bg-blue-6 relative flex flex-col justify-between overflow-hidden p-6 text-white
                             `}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="md:pl-0 flex items-baseline">
                                    <p className="text-4-6xl md:text-4-6xl font-medium text-white">5</p>
                                    <p className="ml-1.5 text-xl md:text-2-6xl font-medium text-white">минут</p>
                                </div>

                                <div>
                                    <span className="text-sm-m md:text-lg font-medium text-white">
                                       До центра
                                     </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-[1rem]">
                        <div
                            className="
                            h-[21.25rem] w-[18.75rem] md:w-80 md:h-[28.375rem]
                            rounded-xs relative flex flex-col justify-between
                            overflow-hidden
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
                                <div className=" md:pl-0 flex items-baseline">
                                    <p className="text-md font-medium md:text-lg">Первоначальный взнос</p>
                                </div>

                                <div>
                                    <div className="md:pl-0 flex items-baseline">
                                        <p className="text-4-6xl md:text-4-6xl font-medium text-white">10</p>
                                        <p className="ml-1.5 text-2-6xl font-medium text-white">%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-[1rem]">
                        <div
                            className={`
                            h-[21.25rem] w-[18.75rem] md:w-80 md:h-[28.375rem]
                            rounded-xs
                                bg-liner-5 relative flex flex-col justify-between overflow-hidden p-6 text-white bg-gray-1
                             `}
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className=" md:pl-0 flex items-baseline">
                                        <p className="text-4-6xl md:text-4-6xl font-medium text-white">3</p>
                                </div>

                                <div>
                                     <span className="text-sm-m md:text-lg font-medium text-white">
                                        Зоны отдыха
                                     </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="!basis-[85%] md:!basis-[18%] pl-[1rem]">
                        <div
                            className="
                            h-[21.25rem] w-[18.75rem] md:w-80 md:h-[28.375rem]
      rounded-xs relative flex flex-col justify-between
      overflow-hidden
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
                                <div className="md:pl-0 flex items-baseline">
                                    <p className="font-medium text-lg">Безопастность</p>
                                </div>

                                <div>
                                    <div className=" md:pl-0 flex items-baseline">
                                        <p className="text-4-6xl md:text-4-6xl font-medium text-white">24/7</p>
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
