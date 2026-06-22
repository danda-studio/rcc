import type { FC, ReactNode } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { CityBadge } from "@/entities/city";
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
    <article className={cn("z-20 flex flex-col", !visible && "-z-10 opacity-0", className)}>
      <div className={`
        relative flex h-24 items-center overflow-hidden rounded-t-md
        bg-radial-(--radial-7)
        md:h-60
      `}
      >
        <Image
          className={`
            absolute right-0 bottom-0 w-3/5 translate-x-6 object-cover
            md:w-3/5 md:translate-x-4
          `}
          src="/images/complex/banner.webp"
          alt="Banner"
          width={300}
          height={300}
        />
        <div className={`
          absolute inset-0 object-cover p-5
          md:p-6
        `}
        >
          <div className={`
            mb-10 flex flex-col items-start gap-2 text-md-l -tracking-md
            max-md:leading-[0.92]
            md:text-2-1xl
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
          </div>
          <CityBadge
            name="Мариуполь"
            className={`
              mb-1
              md:mb-5
            `}
          />
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
          Успейте приобрести квартиру по самым выгодным ценам
        </div>
        <p className={`
          mb-5 w-71.5 text-md leading-[1.2] -tracking-sm text-gray-4
          md:mb-8.25 md:w-93.5 md:text-base
        `}
        >
          ООО "СЗ" РСК сообщает о сдаче в эксплуатацию  ЖК “Олимпийский”. Строительство завершено, и дом готов к заселению.
          {" "}
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
