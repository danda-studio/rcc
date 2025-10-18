import type { FC } from "react";
import { MousePointerClick, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { CityBadge } from "@/entities/city";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { UIGlass } from "@/shared/ui/glass";

export const ComplexBanner: FC = () => {
  return (
    <section className="bg-radial-1 h-250 text-white relative rounded-xs overflow-hidden">
      <Image
        width={1920}
        height={1080}
        alt="Hero image"
        src="/images/complex/banner.png"
        className="absolute left-98 bottom-0 w-480 h-270"
      />

      <div className="absolute left-98 bottom-0 w-400 h-30 overflow-hidden blur-lg">
        <Image
          width={192}
          height={108}
          alt="Hero image"
          src="/images/complex/banner.png"
          className="absolute bottom-0 left-0 min-w-480 min-h-270"
        />
      </div>

      <UIGlass
        className="absolute right-180.5 top-54.5 p-7.5"
        border="corner"
      >
        <ShieldCheck className="size-8" />
      </UIGlass>

      <UIGlass
        className="absolute right-33.5 top-74.5 p-6 pr-15"
        border="corner"
      >
        <p className="mb-15">
          <span className="text-md font-medium">
            от
          </span>
          <span className="text-4xl font-semibold ml-0.75">
            11 500
          </span>
          <span className="text-lg font-semibold ml-0.75">
            ₽
          </span>
        </p>
        <p className="text-md">
          Платеж по ипотеке
        </p>
      </UIGlass>

      <UIGlass
        className="absolute right-153.5 top-136.5 p-6 pr-15"
        border="corner"
      >
        <p className="mb-15">
          <span className="text-md font-medium">
            от
          </span>
          <span className="text-4xl font-semibold ml-0.75">
            2
          </span>
          <span className="text-xl font-semibold ml-0.75">
            %
          </span>
        </p>
        <p className="text-md">
          Ипотека
        </p>
      </UIGlass>

      <div className="absolute inset-0 px-10 py-15">
        <div className="w-222 h-full flex flex-col items-start">
          <CityBadge name="Мариуполь" className="mb-10" />

          <h1 className="text-5xl mb-7 font-medium bg-liner-1 bg-clip-text text-transparent">
            Продажи в новом ЖК "Олимпийский"
          </h1>

          <p className="text-lg">
            Место, где хочется жить
          </p>

          <Button
            className="mt-auto"
            variant="outline"
            size="lg"
          >
            <MousePointerClick />
            Подобрать квартиру
          </Button>
        </div>
      </div>
    </section>
  );
};
