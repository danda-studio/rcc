import React from 'react';
import Image from 'next/image';


export const ResidentialWidget = () => {

    return (
        <div className="bg-white flex flex-col  justify-between  md:flex-row md:pr-14 md:pl-14 ">
            <div className="max-w-[51rem]">
                <h2 className="text-lg-x mb-6 font-medium text-blue-6 md:text-4-5xl">
                    Пространство, где комфорт встречается с современностью
                </h2>
                <p className="text-sm-m text-gray-4 font-medium mt-6">
                    Современный 12-этажный дом комфорт-класса предлагает удобные 1- и 2-комнатные квартиры с
                    продуманными планировками и возможностью создать интерьер по своему вкусу
                </p>

                <div className="flex flex-col max-w-[28rem] mt-10 md:mt-20">
                    <div className="flex justify-start">
                        <div className="flex flex-col items-start">
                            <span className="text-5xl md:text-6xl text-blue-6 font-medium">12</span>
                            <span className="md:text-lg text-md-l text-blue-6 font-medium">Этажей</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="flex flex-col ">
                            <span className="text-5xl md:text-6xl text-blue-6 font-medium">128</span>
                            <span className="md:text-lg text-md-l text-blue-6 font-medium">Квартир</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:grid md:grid-cols-2  pt-10 md:pt-0 flex flex-col ">
                <div className="items-center md:justify-self-start">
                    <div
                        className={`
                                relative flex flex-col justify-between w-auto md:w-[440px] h-[594px] overflow-hidden p-6 text-white
       
                                                    `}
                    >
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <Image
                                src="/images/house.png"
                                alt="house"
                                width={420}
                                height={594}
                                className="rounded-xs w-105"
                                sizes="(max-width: 360px) 328px, 420px"
                            />
                        </div>

                        {/* Контент */}
                    </div>
                </div>

                <div className="items-center md:justify-self-end  md:w-[auto] md:h-[auto] mt-14 md:mt-[42%]">
                    <div
                        className={`
                            rounded-xs
        relative flex flex-col justify-between w-auto md:w-105 h-[37rem] overflow-hidden p-6 text-white bg-gray-1
      `}
                    >
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="pl-6 md:pl-0 flex items-baseline">
                                <p className="text-4-6xl md:text-6xl font-medium text-blue-6">2</p>
                                <p className="ml-1.5 text-2-3xl font-medium text-blue-6">%</p>
                            </div>

                            <div>
                                     <span className="text-sm-m md:text-md-x font-medium text-gray-4">
                                         Благодаря{''} <span className='text-sm-m text-blue-6 font-medium md:text-md-x'>госпрограмме ипотека от 2%</span>, покупка квартиры становится реально доступной для каждой семьи
                                     </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

