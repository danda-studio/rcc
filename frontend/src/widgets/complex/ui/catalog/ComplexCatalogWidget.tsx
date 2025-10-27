import React from "react";
import { ApartmentSelectFormFeature } from "@/features/apartment";

export const ComplexCatalogWidget = () => {
  return (
    <div className={`
      bg-liner-7
      rounded-md
      overflow-hidden
      px-4
      py-8
      md:py-15
      relative
    `}
    >
      <div className={`
        flex
        flex-col
        items-center
        mb-10
        md:mb-15
      `}
      >
        <h2 className={`
          bg-liner-6
          bg-clip-text
          text-transparent
          font-medium
          max-md:text-center
          text-3xl
          md:text-5xl
          mb-6
          md:mb-7
        `}
        >
          Каталог квартир
        </h2>
        <span className={`
          text-white
          max-md:text-center
          text-md
          md:text-lg
        `}
        >
          Всё, что нужно для жизни — рядом с вами
        </span>
      </div>

      <ApartmentSelectFormFeature className="w-full" />

      <div className={`
        w-50
        absolute
        inset-y-0
        left-0
        bg-linear-90
        from-black-1
        to-transparent
        max-md:hidden
      `}
      />

      <div className={`
        w-50
        absolute
        inset-y-0
        right-0
        bg-linear-270
        from-black-1
        to-transparent
        max-md:hidden
      `}
      />
    </div>
  );
};
