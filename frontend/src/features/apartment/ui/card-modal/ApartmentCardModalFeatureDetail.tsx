import type { FC } from "react";
import type { ApartmentDetail } from "./types/ApartmentDetail";
import { Fragment, useMemo } from "react";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/shared/lib/shadcn/ui/dialog";
import { cn } from "@/shared/lib/shadcn/utils";

export const ApartmentCardModalFeatureDetail: FC<ApartmentDetail & {
  className?: string;
}> = ({ title, description, area, floor, maxFloor, height, className }) => {
  const data = useMemo(() => {
    return [
      {
        label: "Общая площадь",
        value: `${area} м²`,
      },
      {
        label: "Этаж",
        value: `${floor} из ${maxFloor}`,
      },
      {
        label: "Высота потолка",
        value: `${height} м`,
      },
    ];
  }, [area, floor, maxFloor, height]);

  return (
    <div className={cn(`
      flex
      flex-col
      items-start
    `, className)}
    >
      <DialogHeader className={`
        !gap-0
        max-md:mb-8
      `}
      >
        <DialogTitle className={`
          font-medium
          text-left
          text-blue-6
          -tracking-md
          max-w-111.5
          text-md-l
          md:text-4-5xl
          mb-4
          md:mb-6
        `}
        >
          {title}
        </DialogTitle>
        <DialogDescription className={`
          text-left
          -tracking-sm
          font-medium
          leading-[1.2]
          text-gray-4
          text-base
          md:text-md-x
        `}
        >
          {description}
        </DialogDescription>
      </DialogHeader>

      <div className={`
        max-md:w-53.25
        mt-auto
        mb-4
        md:mb-7
        grid
        grid-cols-[1fr_fit-content(7.5rem)]
        md:grid-cols-[fit-content(7.5rem)_1fr]
        gap-3
        md:gap-4
        text-nowrap
      `}
      >
        {data.map(({ label, value }) => (
          <Fragment key={label}>
            <div className={`
              flex
              items-center
            `}
            >
              <span className={`
                leading-[1.2]
                text-gray-4
                font-medium
                text-xs
                md:text-base
              `}
              >
                {label}
              </span>
            </div>
            <div className={`
              flex
              items-center
            `}
            >
              <span className={`
                leading-[1.2]
                text-blue-6
                font-medium
                text-base
                md:text-md
              `}
              >
                {value}
              </span>
            </div>
          </Fragment>
        ))}
      </div>

      <ContactFormModalFeature>
        <Button
          className={`
            max-md:w-full
            px-10
          `}
          size="md"
        >
          Забронировать
        </Button>
      </ContactFormModalFeature>
    </div>
  );
};
