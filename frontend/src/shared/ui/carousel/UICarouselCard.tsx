"use client"
import React, {FC} from "react";
import Image from "next/image";
import {CarouselCardProps} from "@/shared/ui/carousel/types";


export const CarouselCard: FC<CarouselCardProps> = ({ image, year, title, description }) => (
    <div className="h-[21.25rem] w-[18.75rem] md:w-[27.5rem] md:h-[35rem] rounded-xs relative flex flex-col justify-between overflow-hidden p-6 text-white">
        <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="absolute bottom-0 rounded-xs md:rounded-0 left-1/2 -translate-x-1/2 w-auto h-[100%] object-contain z-0"
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="md:pl-0 items-baseline flex flex-col gap-6">
                <h4 className="text-2xl md:text-3xl text-white">{year}</h4>
                <span className="font-medium text-md-x md:text-lg">{title}</span>
            </div>
            <div>
                <div className="md:pl-0 flex items-baseline">
                    <p className="ml-1.5 text-sm md:text-md font-medium text-white/72">{description}</p>
                </div>
            </div>
        </div>
    </div>
);