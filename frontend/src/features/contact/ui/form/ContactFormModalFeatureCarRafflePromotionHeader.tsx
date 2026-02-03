import type { FC } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { DialogClose, DialogDescription, DialogHeader, DialogTitle } from "@/shared/lib/shadcn/ui/dialog";
import { UIGlass } from "@/shared/ui/glass";

export const ContactFormModalFeatureCarRafflePromotionHeader: FC = () => {
  return (
    <DialogHeader className={`
      relative flex h-45 items-center justify-center !gap-0 overflow-hidden
      max-md:w-88
      md:h-67
    `}
    >
      <Image
        src="/images/promotion/car-raffle/bg-2.webp"
        alt="BG"
        width={572}
        height={276}
        className="absolute h-full w-full object-cover"
      />
      <Image
        src="/images/promotion/car-raffle/car-2.webp"
        alt="CAR"
        width={405}
        height={276}
        className={`
          absolute right-0 bottom-0 w-60
          md:w-101.25
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
            bg-linear-(--linear-10) bg-clip-text text-transparent
          `}
          >
            Розыгрыш
          </span>
          <span className="text-red-2">
            автомобиля!
          </span>
        </DialogTitle>
        <DialogDescription className={`
          max-w-46 text-xs leading-[1.2] font-medium -tracking-sm text-black/60
          max-md:text-left
          md:max-w-70.5 md:text-base
        `}
        >
          Представьте: вы получаете ключи от
          {" "}
          <br className="max-md:hidden" />
          своей новой уютной квартиры в ЖК «Олимпийский», а в придачу – новый автомобиль LADA Granta
        </DialogDescription>

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
