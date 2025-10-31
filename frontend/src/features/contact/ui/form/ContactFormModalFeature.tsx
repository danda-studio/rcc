import type { FC } from "react";
import type { ContactFormModalFeatureProps } from "./types";
import { X } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/lib/shadcn/ui/dialog";
import { UIGlass } from "@/shared/ui/glass";
import { ContactFormFeature } from "./ContactFormFeature";

export const ContactFormModalFeature: FC<ContactFormModalFeatureProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={`
          overflow-hidden
          !p-0
          !gap-0
          !border-none
          md:max-w-143
          flex
          flex-col
        `}
      >
        <DialogHeader className={`
          bg-radial-(--radial-5)
          !gap-0
          relative
          overflow-hidden
          max-md:w-88
          h-45
          md:h-67
        `}
        >
          <Image
            src="/images/complex/house-banner.png"
            alt="Build"
            width={364}
            height={364}
            className={`
              absolute
              -right-23.5
              md:-right-28
              -top-2.75
              md:-top-5
              size-66
              md:size-91
            `}
          />
          <div className={`
            absolute
            inset-0
            p-5
            md:p-10
          `}
          >
            <DialogTitle className={`
              -tracking-md
              max-md:text-left
              max-w-40
              md:max-w-77.75
              mb-4
              leading-[0.92]
              font-medium
              text-white
              text-lg-x
              md:text-4xl
            `}
            >
              Оставить заявку
            </DialogTitle>
            <DialogDescription className={`
              leading-[1.2]
              text-white
              font-medium
              -tracking-sm
              max-w-42.5
              md:max-w-70.5
              max-md:text-left
              text-base
              md:text-md
            `}
            >
              Сделайте первый шаг к новой квартире уже сегодня
            </DialogDescription>

            <DialogClose
              asChild
              className={`
                absolute
                top-5
                right-5
              `}
            >
              <UIGlass
                border="corner"
                className={`
                  cursor-pointer
                  p-3
                  hover:opacity-80
                  active:opacity-100
                  rounded-sm
                `}
              >
                <X className="size-6" />
              </UIGlass>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className={`
          p-5
          md:p-10
          max-md:w-88
        `}
        >
          <ContactFormFeature className="w-full" />
          <div className={`
            mt-3.5
            flex
            justify-center
          `}
          >
            <p className={`
              max-w-86
              text-xxs
              text-gray-4
              md:text-xs
              text-center
            `}
            >
              Оставляя заявку, вы соглашаетесь с условиями обработки персональных данных
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
