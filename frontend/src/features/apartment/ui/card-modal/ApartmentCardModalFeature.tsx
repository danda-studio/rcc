"use client";

import type { FC } from "react";
import type { ApartmentCardModalFeatureProps } from "./types";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useMemo } from "react";
import { APARTMENTS } from "@/entities/apartment/consts/apartments";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/lib/shadcn/ui/dialog";
import { UIGlass } from "@/shared/ui/glass";
import { ApartmentCardModalFeatureDetail } from "./ApartmentCardModalFeatureDetail";
import { ApartmentCardModalFeatureImageCarousel } from "./ApartmentCardModalFeatureImageCarousel";

export const ApartmentCardModalFeature: FC<ApartmentCardModalFeatureProps> = ({
  apartmentId,
  children,
}) => {
  const apartment = useMemo(
    () => APARTMENTS.find(({ id }) => id === apartmentId),
    [apartmentId],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={`
          custom-scroll max-w-88 !gap-0 overflow-hidden !border-none !p-0
          max-md:max-h-[90vh] max-md:overflow-y-auto
          md:max-w-400 md:overflow-hidden
        `}
      >
        {apartment && (
          <div
            className={`
              flex p-1.5
              max-md:w-88 max-md:flex-col-reverse
              md:p-4
            `}
          >
            <ApartmentCardModalFeatureDetail
              {...apartment}
              className={`
                p-3.5 pr-8
                max-md:pt-5
                md:p-11 md:pr-4
              `}
            />
            <div
              className={`
                flex h-58 w-full shrink-0 items-center rounded-md
                bg-radial-(--radial-6)
                md:h-192 md:w-239
              `}
            >
              <ApartmentCardModalFeatureImageCarousel {...apartment} />
            </div>
          </div>
        )}

        <DialogClose
          asChild
          className={`
            absolute top-4.5 right-4.5
            md:top-9 md:right-9
          `}
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
      </DialogContent>
    </Dialog>
  );
};
