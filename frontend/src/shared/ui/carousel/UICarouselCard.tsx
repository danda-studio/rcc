"use client";
import type { FC } from "react";
import type { CarouselCardProps } from "@/shared/ui/carousel/types";
import Image from "next/image";
import React from "react";

export const CarouselCard: FC<CarouselCardProps> = ({ image, year, title, description }) => (
  <div className={`
    relative flex h-[21.25rem] w-75 flex-col justify-between overflow-hidden
    rounded-xs p-6 text-white
    md:h-[35rem] md:w-110
  `}
  >
    <Image
      src={image}
      alt={title}
      width={400}
      height={400}
      className={`
        absolute bottom-0 left-1/2 z-0 h-full w-full -translate-x-1/2 rounded-xs
        object-cover
        md:rounded-none
      `}
    />
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className={`
        flex flex-col items-baseline gap-6
        md:pl-0
      `}
      >
        <h3 className={`
          text-2xl text-white
          md:text-3xl
        `}
        >
          {year}
        </h3>
        <span className={`
          text-md-x font-medium
          md:text-lg
        `}
        >
          {title}
        </span>
      </div>
      <div>
        <div className={`
          flex items-baseline
          md:pl-0
        `}
        >
          <p className={`
            ml-1.5 text-sm font-medium text-white/72
            md:text-md
          `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);
