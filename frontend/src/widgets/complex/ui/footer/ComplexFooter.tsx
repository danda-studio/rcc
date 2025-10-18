import type {FC} from "react";
import {CityBadge} from "@/entities/city";
import Link from "next/link";

export const ComplexFooterWidget: FC = () => {
    return (
        <section className="bg-white md:pl-16 md:pr-16 pt-16 md:pt-28 ">
            <h1 className="text-center text-2-2xl md:text-7xl mb-7 font-medium bg-clip-text text-transparent bg-liner-2">
                Олимпийский
            </h1>
            <div className='flex items-start  md:items-end justify-between flex-col md:flex-row'>
                <div className="flex flex-col gap-4 mb-10 md:mb-0">
                    <Link className='text-gray-4 font-medium text text-sm-m hover:text-gray-6' href={'#'}>О
                        проекте</Link>
                    <Link className='text-gray-4 font-medium text text-sm-m  hover:text-gray-6'
                          href={'#'}>Ипотека</Link>
                    <Link className='text-gray-4 font-medium text text-sm-m  hover:text-gray-6' href={'#'}>Хронология
                        строительства</Link>
                    <Link className='text-gray-4 font-medium text text-sm-m  hover:text-gray-6'
                          href={'#'}>Планировки</Link>
                </div>

                <div>
                    <span className='text-gray-4 font-medium text text-sm-m'>© 2025 ООО "СЗ"РСК""</span>
                </div>
                <div>
                    <button>asdasddsa</button>
                    <Link className='text-gray-4 font-medium text text-sm-m  hover:text-gray-6' href={'#'}>Политика
                        обработки персональных
                        данных</Link>
                </div>
            </div>
        </section>
    );
};
