import type { FC } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { CityBadge } from "@/entities/city";
import { DialogClose, DialogHeader, DialogTitle } from "@/shared/lib/shadcn/ui/dialog";
import { UIGlass } from "@/shared/ui/glass";

export const ContactFormModalFeatureCarRafflePromotionHeader: FC = () => {
  return (
    <DialogHeader className={`
      relative flex h-45 items-center justify-center !gap-0 overflow-hidden
      bg-radial-(--radial-7)
      max-md:w-88
      md:h-67
    `}
    >
      <Image
        src="/images/complex/banner.webp"
        alt="CAR"
        width={405}
        height={276}
        className={`
          absolute right-0 bottom-0 w-4/5 translate-x-6 object-cover
          md:w-3/5 md:translate-x-4
        `}
      />
      <div className={`
        absolute inset-0 p-5
        md:p-10
      `}
      >
        <DialogTitle className={`
          mb-3 flex flex-col items-start gap-1 text-md-l leading-[0.92]
          font-medium -tracking-md text-white
          max-md:text-left
          md:mb-5 md:text-2-1xl
        `}
        >
          <span className={`
            bg-linear-(--linear-1) bg-clip-text leading-none text-transparent
          `}
          >
            Дом сдан
          </span>
          <span className={`
            bg-linear-(--linear-5) bg-clip-text leading-none text-transparent
          `}
          >
            в эксплуатацию
          </span>

          <CityBadge
            name="Мариуполь"
            className={`
              mt-4 mb-1
              md:mt-6 md:mb-5
            `}
          />
        </DialogTitle>
        <DialogClose
          asChild
          className="absolute top-5 right-5"
        >
          <UIGlass
            border="corner"
            className={`
              cursor-pointer rounded-sm p-3
              hover:opacity-80
              active:opacity-100
            `}
          >
            <X className="size-6" />
          </UIGlass>
        </DialogClose>
      </div>
    </DialogHeader>
  );
};
