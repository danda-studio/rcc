"use client";

import type { FC } from "react";
import type { ApartmentSelectFormFeatureProps } from "./types";
import type { ApartmentCarouselSelectItem } from "@/entities/apartment";
import { zodResolver } from "@hookform/resolvers/zod";
import { MousePointerClick } from "lucide-react";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { ApartmentCarouselSelect, ApartmentCountRoomSelect } from "@/entities/apartment";
import { APARTMENTS } from "@/entities/apartment/consts/apartments";
import { ApartmentCarouselSelectItemContent } from "@/entities/apartment/ui/carousel-select/ApartmentCarouselSelectItemContent";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { cn } from "@/shared/lib/shadcn/utils";
import { ApartmentCardModalFeature } from "../card-modal/ApartmentCardModalFeature";

const formSchema = z.object({
  countRoom: z
    .number(),
  apartment: z
    .string(),
});

export const ApartmentSelectFormFeature: FC<ApartmentSelectFormFeatureProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countRoom: 1,
      apartment: "1Б",
    },
  });
  const countRoom = form.watch("countRoom");

  const apartmentItems = useMemo(() => {
    return APARTMENTS.reduce(
      (acc, i) => {
        if (i.room === countRoom) {
          acc.selectable.push(i);
        } else {
          acc.secondary.push(i);
        }
        return acc;
      },
      {
        selectable: [] as ApartmentCarouselSelectItem[],
        secondary: [] as ApartmentCarouselSelectItem[],
      } as const,
    );
  }, [countRoom]);

  const apartmentSideItems = useMemo(() => {
    const c = Math.ceil(apartmentItems.secondary.length / 2);
    const data: Record<
      "left" | "right",
      ApartmentCarouselSelectItem[]
    > = {
      left: apartmentItems.secondary.slice(0, c),
      right: apartmentItems.secondary.slice(c),
    };
    if (data.left.length !== data.right.length) {
      data.right.push(data.left[0]);
    }
    return data;
  }, [apartmentItems.secondary]);

  const apartamentId = form.watch("apartment");

  return (
    <form
      className={cn(`
        flex flex-col items-center gap-8
        md:gap-10
      `, className)}
      // onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        name="countRoom"
        control={form.control}
        render={({ field: { onChange, ...field } }) => (
          <ApartmentCountRoomSelect
            {...field}
            onChange={(e) => {
              switch (e) {
                case 1:
                  form.setValue("apartment", "1Б");
                  break;
                case 2:
                  form.setValue("apartment", "2Б");
                  break;
              }
              onChange(e);
            }}
          />
        )}
      />

      <Controller
        name="apartment"
        control={form.control}
        render={({ field }) => (
          <div className={`
            flex items-center justify-center gap-4 overflow-hidden
            md:w-full
          `}
          >
            {apartmentSideItems.left.map(i => (
              <ApartmentCarouselSelectItemContent
                key={i.id}
                {...i}
                disabled
                className={`
                  shrink-0
                  max-md:hidden
                  md:mb-26 md:basis-60
                `}
              />
            ))}

            <ApartmentCarouselSelect
              contentClassName={`
                md:shrink-0
                max-md:max-w-88
                max-md:min-w-88
              `}
              className="md:basis-208"
              {...field}
              items={apartmentItems.selectable}
            />

            {apartmentSideItems.right.map(i => (
              <ApartmentCarouselSelectItemContent
                key={i.id}
                {...i}
                disabled
                className={`
                  shrink-0
                  max-md:hidden
                  md:mb-26 md:basis-60
                `}
              />
            ))}
          </div>
        )}
      />

      <ApartmentCardModalFeature apartmentId={apartamentId}>
        <Button
          variant="outline"
          size="lg"
          className="max-md:w-70"
        >
          <MousePointerClick />
          Подробнее
        </Button>
      </ApartmentCardModalFeature>
    </form>
  );
};
