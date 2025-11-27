import React from "react";
import { ApartmentSelectFormFeature } from "@/features/apartment";

export const ComplexCatalogWidget = () => {
  return (
    <div className={`
      relative overflow-hidden rounded-md bg-radial-(--radial-9) px-4 py-8
      md:py-15
    `}
    >
      <div className={`
        mb-10 flex flex-col items-center
        md:mb-15
      `}
      >
        <h2 className={`
          mb-6 bg-linear-(--linear-7) bg-clip-text text-3xl font-medium
          text-transparent
          max-md:text-center
          md:mb-7 md:text-5xl
        `}
        >
          Каталог квартир
        </h2>
        <span className={`
          text-md text-white
          max-md:text-center
          md:text-lg
        `}
        >
          Всё, что нужно для жизни — рядом с вами
        </span>
      </div>

      <ApartmentSelectFormFeature className="w-full" />

      <div className={`
        absolute inset-y-0 left-0 w-50 bg-linear-90 from-black-1 to-transparent
        max-md:hidden
      `}
      />

      <div className={`
        absolute inset-y-0 right-0 w-50 bg-linear-270 from-black-1
        to-transparent
        max-md:hidden
      `}
      />
    </div>
  );
};
