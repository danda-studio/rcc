"use client";

import type { FC } from "react";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UIInfo } from "@/shared/ui/info/UIInfo";

export const ComplexAboutWidget: FC = () => {
  return (
    <section className={`
      flex gap-3.25 px-3
      max-md:flex-col
      md:gap-3 md:px-10
    `}
    >
      <div className={`
        flex grow flex-col
        md:gap-3
      `}
      >
        <h2 className={`
          mb-6 text-lg-x leading-[0.92] font-medium -tracking-md text-blue-6
          md:mb-9 md:text-4-5xl
        `}
        >
          О нашем проекте
        </h2>

        <p className={`
          mb-9 text-base leading-[1.2] font-medium -tracking-sm text-gray-4
          md:text-md-x
        `}
        >
          ЖК «Олимпийский» — Ваш новый дом у моря.
          <br />
          <br />
          ЖК «Олимпийский» — современный монолитный
          12-этажный дом комфорт-класса.
          <br />
          <br />
          Здесь вас ждут квартиры со свободной планировкой. Это чистый лист, на котором вы сможете нарисовать интерьер по своему вкусу и воплотить в жизнь самые смелые дизайнерские идеи.
        </p>
        <div className={`
          grid grid-cols-1 gap-3.25
          md:grid-cols-[24.1875rem_1fr] md:gap-3
        `}
        >
          <UIInfo
            icon={<ShieldCheck />}
            color="gray"
            description="Просторный двор и большая придомовая парковка"
          />
          <UIInfo
            icon={<ShieldCheck />}
            color="gray"
            description="Современная детская площадка, спортивная площадка и уютные зоны отдыха, мангальная зона"
          />
          <UIInfo
            className="md:col-start-1 md:col-end-3"
            icon={<ShieldCheck />}
            color="gray"
            description="Море рядом: Всего 5 минут на машине — и вы на пляже. Также рядом с домом предусмотрена остановка общественного транспорта"
          />
        </div>
      </div>
      <div className={`
        relative w-full shrink-0 overflow-hidden rounded-md
        max-md:h-88
        md:w-222
      `}
      >
        <Image
          src="/images/renders/1.webp"
          width={888}
          height={806}
          alt="About Render"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </section>
  );
};
