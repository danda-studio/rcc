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
          flex flex-col !gap-0 overflow-hidden !border-none !p-0
          md:max-w-143
        `}
      >
        <DialogHeader className={`
          relative h-45 !gap-0 overflow-hidden bg-radial-(--radial-5)
          max-md:w-88
          md:h-67
        `}
        >
          <Image
            src="/images/buildings/2.webp"
            alt="Build"
            width={364}
            height={364}
            className={`
              absolute -top-2.75 -right-23.5 size-66
              md:-top-5 md:-right-28 md:size-91
            `}
          />
          <div className={`
            absolute inset-0 p-5
            md:p-10
          `}
          >
            <DialogTitle className={`
              mb-4 max-w-40 text-lg-x leading-[0.92] font-medium -tracking-md
              text-white
              max-md:text-left
              md:max-w-77.75 md:text-4xl
            `}
            >
              Оставить заявку
            </DialogTitle>
            <DialogDescription className={`
              max-w-42.5 text-base leading-[1.2] font-medium -tracking-sm
              text-white
              max-md:text-left
              md:max-w-70.5 md:text-md
            `}
            >
              Сделайте первый шаг к новой квартире уже сегодня
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

        <div className={`
          p-5
          max-md:w-88
          md:p-10
        `}
        >
          <ContactFormFeature className="w-full" />
          <div className="mt-3.5 flex justify-center">
            <p className={`
              max-w-86 text-center text-xxs text-gray-4
              md:text-xs
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
