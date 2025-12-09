import type { FC } from "react";
import type { ContactFormModalFeatureProps } from "./types";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/lib/shadcn/ui/dialog";
import { ContactFormFeature } from "./ContactFormFeature";
import { ContactFormModalFeatureCarRafflePromotionHeader } from "./ContactFormModalFeatureCarRafflePromotionHeader";

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
        {/* <ContactFormModalFeatureDefaultHeader /> */}
        <ContactFormModalFeatureCarRafflePromotionHeader />

        <div className={`
          p-5
          max-md:w-88
          md:p-10
        `}
        >
          <ContactFormFeature
            className="w-full"
            button={{
              label: "Узнать подробнее",
              variant: "danger",
            }}
          />
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
