import type { FC } from "react";
import { Fragment, useMemo } from "react";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/lib/shadcn/ui/dialog";
import { cn } from "@/shared/lib/shadcn/utils";

export const ApartmentCardModalFeatureDetail = ({
                                                  room,
                                                  area: {
                                                    oldPrice,
                                                    newPrice,
                                                    total,
                                                    life,
                                                    kitchen,
                                                    hallway,
                                                    bathroom,
                                                    balcony,
                                                    tambour,
                                                  },
                                                  className,
                                                }: {
  room: any;
  area: {
    oldPrice?: number | null;
    newPrice?: number | null;
    total: any;
    life: any;
    kitchen: any;
    hallway: any;
    bathroom: any;
    balcony: any;
    tambour: any;
  };
  className: any;
}): JSX.Element => {
  const data = useMemo(() => {
    const els = [
      { label: "Общая площадь", value: `${total} м²` },
      { label: "Жилая площадь", value: `${life} м` },
      { label: "Кухня", value: `${kitchen} м` },
      { label: "Коридор", value: `${hallway} м` },
      { label: "Ванная", value: `${bathroom} м` },
    ];

    if (balcony) {
      els.push({ label: "Балкон", value: `${balcony} м` });
    }

    if (tambour) {
      els.push({ label: "Тамбур", value: `${tambour} м` });
    }

    return els;
  }, [total, life, kitchen, hallway, bathroom, balcony, tambour]);

  const title = useMemo(() => {
    switch (room) {
      case 1:
        return "1-комнатная квартира";
      case 2:
        return "2-комнатная квартира";
      default:
        return "";
    }
  }, [room]);

  return (
      <div className={cn("flex flex-col items-start", className)}>
        <DialogHeader className="!gap-0 max-md:mb-8">
          <DialogTitle
              className="
            mb-4 max-w-111.5 text-left text-md-l font-medium -tracking-md
            text-blue-6
            md:mb-6 md:text-4-5xl
          "
          >
            {title}
          </DialogTitle>

          <DialogDescription
              className="
            text-left text-base leading-[1.2] font-medium -tracking-sm text-gray-4
            md:text-md-x
          "
          >
            Квартира имеет удачную планировку. Большие окна наполняют помещения
            естественным светом, создавая теплую атмосферу
          </DialogDescription>
        </DialogHeader>

        {(oldPrice || newPrice) && (
            <div className="flex items-center gap-4 mt-8 md:mt-35.5 mb-8">
              <p className="text-lg-x text-red-3 md:text-2-1xl">{newPrice.toLocaleString()} ₽</p>
              <p className="
             text-left text-base leading-[1.2] font-medium -tracking-sm text-gray-4
             md:text-md-x line-through
              ">
                {oldPrice.toLocaleString()} ₽
              </p>
            </div>
        )}

        <div
            className="
          mt-auto mb-4 grid grid-cols-[1fr_fit-content(7.5rem)] gap-3 text-nowrap
          max-md:w-53.25
          md:mb-7 md:grid-cols-[fit-content(7.5rem)_1fr_fit-content(7.5rem)_1fr]
          md:gap-4
        "
        >
          {data.map(({ label, value }) => (
              <Fragment key={label}>
                <div className="flex items-center">
              <span className="text-xs leading-[1.2] font-medium text-gray-4 md:text-base">
                {label}
              </span>
                </div>
                <div className="flex items-center">
              <span className="text-base leading-[1.2] font-medium text-blue-6 md:text-md">
                {value}
              </span>
                </div>
              </Fragment>
          ))}
        </div>

        <ContactFormModalFeature>
          <Button className="px-10 max-md:w-full" size="md">
            Забронировать
          </Button>
        </ContactFormModalFeature>
      </div>
  );
};
