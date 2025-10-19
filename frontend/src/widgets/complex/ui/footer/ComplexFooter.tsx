import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/lib/shadcn/ui/button";

export const ComplexFooterWidget: FC = () => {
    return (
        <section className="bg-white md:pl-16 md:pr-16 pt-16 md:pt-28 ">
            <h1 className="text-center mb-6 text-2-2xl -tracking-lg  md:text-7xl md:mb-18.5 font-medium bg-clip-text text-transparent bg-liner-3">
                Олимпийский
            </h1>

            <div className="flex items-start md:items-end justify-between flex-col md:flex-row">
                <div className="flex ml-2 md:ml-0 flex-col gap-4 mb-10 md:mb-0">
                    <Link
                        className="text-gray-4 font-medium text text-sm-m hover:text-gray-700"
                        href="#"
                    >
                        О проекте
                    </Link>
                    <Link
                        className="text-gray-4 font-medium text text-sm-m hover:text-gray-700"
                        href="#"
                    >
                        Ипотека
                    </Link>
                    <Link
                        className="text-gray-4 font-medium text text-sm-m hover:text-gray-700"
                        href="#"
                    >
                        Хронология строительства
                    </Link>
                    <Link
                        className="text-gray-4 font-medium text text-sm-m hover:text-gray-700"
                        href="#"
                    >
                        Планировки
                    </Link>

                    <Link
                        className="underline pt-6 text-gray-4 font-medium text text-sm-m hover:text-gray-700 md:hidden"
                        href="#"
                    >
                        Политика обработки персональных данных
                    </Link>
                </div>

                <div>
          <span className="text-gray-4 font-medium text text-sm-m hidden md:inline">
                 © 2025 ООО "СЗ"РСК""
          </span>
                </div>

                <div className="flex flex-col items-end">
                    <Button className="max-w-56 !hidden md:!inline-flex" size={"sm"} variant="cart">
                        <Image className={'pr-0'} src="/icons/map.svg" width={24} height={24} alt="map icon" />
                        <span className={'pl-2'}> Мы на карте</span>
                    </Button>

                    <Link
                        className="underline pt-10 text-gray-4 font-medium text text-sm-m hover:text-gray-700 hidden md:inline"
                        href="#"
                    >
                        Политика обработки персональных данных
                    </Link>
                </div>
            </div>

            <div className="mt-6 md:hidden ">
                <div className="flex items-center justify-between">
                    <Button className="max-w-56" size={"sm"} variant={'cart'}>
                        <Image className={'mr-3.5'} src="/icons/map.svg" width={24} height={24} alt="map icon" />
                        Мы на карте
                    </Button>

                    <span className="text-gray-4 font-medium text text-sm-m">© 2025 ООО "СЗ"РСК""</span>
                </div>
            </div>
        </section>
    );
};
