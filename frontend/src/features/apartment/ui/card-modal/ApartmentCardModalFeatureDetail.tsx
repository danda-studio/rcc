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
      <DialogHeader className="gap-0">
        <DialogTitle className={`
          text-4-5xl
          text-blue-6
          -tracking-md
          max-w-111.5
          font-medium
          mb-6
        `}
        >
          {title}
        </DialogTitle>
        <DialogDescription className={`
          text-md-x
          -tracking-sm
          leading-[1.2]
          text-gray-4
          font-medium
        `}
        >
          {description}
        </DialogDescription>
      </DialogHeader>

      <div className={`
        mt-auto
        mb-7
        grid
        grid-cols-[fit-content(7.5rem)_1fr]
        gap-4
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
                text-base
                font-medium
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
                text-md
                font-medium
              `}
              >
                {value}
              </span>
            </div>
          </Fragment>
        ))}
      </div>

      <ContactFormModalFeature>
        <Button className="px-10">
          Забронировать
        </Button>
      </ContactFormModalFeature>
    </div>
  );
};
