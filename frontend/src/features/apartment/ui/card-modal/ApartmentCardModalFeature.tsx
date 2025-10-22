"use client";

import type { FC } from "react";
import type { ApartmentCardModalFeatureProps } from "./types";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useMemo } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/lib/shadcn/ui/dialog";
import { UIGlass } from "@/shared/ui/glass";
import { ApartmentCardModalFeatureDetail } from "./ApartmentCardModalFeatureDetail";
import { ApartmentCardModalFeatureImageCarousel } from "./ApartmentCardModalFeatureImageCarousel";
import { items } from "./consts/items";

export const ApartmentCardModalFeature: FC<ApartmentCardModalFeatureProps> = ({ apartmentId, children }) => {
  const apartment = useMemo(() => {
    return items.find(({ id }) => id === apartmentId);
  }, [apartmentId]);
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
          md:max-w-400
        `}
      >
        {apartment
          ? (
              <div className={`
                p-4
                flex
              `}
              >
                <ApartmentCardModalFeatureDetail
                  {...apartment}
                  className={`
                    p-11
                    pr-4
                  `}
                />

                <div className={`
                  bg-radial-(--radial-6)
                  rounded-md
                  h-192
                  w-239
                  shrink-0
                `}
                >
                  <ApartmentCardModalFeatureImageCarousel {...apartment} />
                </div>
              </div>
            )
          : ""}

        <DialogClose
          asChild
          className={`
            absolute
            top-9
            right-9
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
      </DialogContent>
    </Dialog>
  );
};
