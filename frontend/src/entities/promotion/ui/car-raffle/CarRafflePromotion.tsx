import type { FC, ReactNode } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/shared/lib/shadcn/utils";
import { UIGlass } from "@/shared/ui/glass";

interface CarRafflePromotionProps {
  className?: string;
  visible?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const CarRafflePromotion: FC<CarRafflePromotionProps> = ({ className, visible, onClose, children }) => {
  return (
    <article className={cn("flex flex-col", !visible && "-z-10 opacity-0", className)}>
      <div className={`
        relative flex h-24 items-center justify-center overflow-hidden
        rounded-t-md
        md:h-60
      `}
      >
        <Image
          className={`
            absolute w-full object-cover
            max-md:pt-8
          `}
          src="/images/promotion/car-raffle/bg.webp"
          alt="Car Promotion BG"
          width={492}
          height={240}
        />
        <Image
          className={`
            absolute w-5/7 object-cover
            max-md:right-0 max-md:bottom-0
            md:h-full md:w-full
          `}
          src="/images/promotion/car-raffle/car.webp"
          alt="Car Promotion CAR"
          width={492}
          height={240}
        />
        <div className={`
          absolute inset-0 object-cover p-5
          md:p-6
        `}
        >
          <div className={`
            flex flex-col items-start gap-2 text-md-l -tracking-md
            max-md:leading-[0.92]
            md:text-2-1xl
          `}
          >
            <span className={`
              bg-linear-(--linear-1) bg-clip-text text-transparent
            `}
            >
              Розыгрыш
            </span>
            <span className="text-red-2">
              автомобиля!
            </span>
          </div>
        </div>
      </div>
      <div className={`
        flex flex-col items-start rounded-b-md bg-gray-1 p-5
        md:px-6 md:pt-10 md:pb-6
      `}
      >
        <div className={`
          mb-3 w-71.5 text-md leading-[1.1] font-medium -tracking-md text-blue-6
          md:mb-4 md:w-83.25 md:text-md-x
        `}
        >
          Ваша квартира мечты в ЖК "Олимпийский"- и LADA Granta
          {" "}
          <br className="md:hidden" />
          в подарок!
        </div>
        <p className={`
          mb-5 w-71.5 text-xs leading-[1.2] -tracking-sm text-gray-4
          md:mb-8.25 md:w-93.5 md:text-base
        `}
        >
          ООО "СЗ" РСК"" запускает уникальную акцию для всех, кто уже выбрал свою квартиру в нашем жилом комплексе
        </p>

        {children}
      </div>
      <UIGlass
        border="corner"
        className={`
          absolute top-4 right-4 cursor-pointer rounded-sm p-3
          hover:opacity-80
          active:opacity-100
          md:top-5 md:right-9
        `}
        onClick={onClose}
      >
        <X className="size-6" />
      </UIGlass>
    </article>
  );
};
