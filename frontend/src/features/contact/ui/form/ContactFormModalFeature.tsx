import type { FC } from "react";
import type { ContactFormModalFeatureProps } from "./types";
import { DialogClose, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/shared/lib/shadcn/ui/dialog";
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
        `}
      >
        <DialogHeader className={`
          bg-radial-(--radial-5)
          !gap-0
          relative
          h-67
          overflow-hidden
        `}
        >
          <Image
            src="/images/buildings/2.png"
            alt="Build"
            width={364}
            height={364}
            className={`
              h-91
              w-91
              absolute
              -top-5
              -right-28
            `}
          />
          <div className={`
            absolute
            inset-0
            p-10
          `}
          >
            <DialogTitle className={`
              max-w-77.75
              mb-4
              text-4xl
              leading-[0.92]
              font-medium
              text-white
              -tracking-md
            `}
            >
              Оставить заявку
            </DialogTitle>
            <DialogDescription className={`
              max-w-70.5
              text-md
              leading-[1.2]
              text-white
              font-medium
              -tracking-sm
            `}
            >
              Сделайте первый шаг к новой квартире уже сегодня.
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

        <div className="p-10">
          <ContactFormFeature />
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
