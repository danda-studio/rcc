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

export const ApartmentCardModalFeature: FC<ApartmentCardModalFeatureProps> = ({ apartmentId, children }) => {
  const apartment = useMemo(() => {
    return APARTMENTS.find(({ id }) => id === apartmentId);
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
          max-w-88
          md:max-w-400
        `}
      >
        {apartment
          ? (
              <div className={`
                max-md:w-88
                p-1.5
                md:p-4
                flex
                max-md:flex-col-reverse
              `}
              >
                <ApartmentCardModalFeatureDetail
                  {...apartment}
                  className={`
                    p-3.5
                    max-md:pt-5
                    pr-8
                    md:p-11
                    md:pr-4
                  `}
                />

                <div className={`
                  bg-radial-(--radial-6)
                  rounded-md
                  h-58
                  md:h-192
                  w-full
                  md:w-239
                  shrink-0
                  flex
                  items-center
                `}
                >
                  <ApartmentCardModalFeatureImageCarousel {...apartment} />

                  {/* <div className={`
                    px-10
                    flex
                    flex-wrap
                    justify-center
                    gap-1
                    md:gap-2
                    mt-4
                    md:mt-8
                  `}
                  >
                    {apartment.image.carousel.map(r => (
                      <Badge
                        key={r}
                        size="md"
                        variant="glass"
                        className="rounded-sm"
                      >
                        {r}
                      </Badge>
                    ))}
                  </div> */}
                </div>
              </div>
            )
          : ""}

        <DialogClose
          asChild
          className={`
            absolute
            top-4.5
            right-4.5
            md:top-9
            md:right-9
          `}
        >
          <UIGlass
            border="corner"
            className={`
              p-3
              hover:opacity-80
              active:opacity-100
              rounded-sm
              cursor-pointer
            `}
          >
            <X className="size-6" />
          </UIGlass>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
