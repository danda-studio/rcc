import type { FC } from "react";
import { CityBadge } from "@/entities/city";

export const ComplexBanner: FC = () => {
  return (
    <section className="bg-radial-1 h-250 text-white relative rounded-xs">
      <div className="absolute inset-0 px-10 py-15">
        <div className="w-222">
          <CityBadge name="Мариуполь" className="mb-10" />
          <h1 className="text-5xl mb-7 font-medium bg-liner-1 bg-clip-text text-transparent">
            Продажи в новом ЖК "Олимпийский"
          </h1>
          <p className="text-lg">
            Место, где хочется жить
          </p>
        </div>
      </div>
    </section>
  );
};
