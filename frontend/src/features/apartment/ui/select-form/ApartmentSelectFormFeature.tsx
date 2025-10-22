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
import { ApartmentCarouselSelectItemContent } from "@/entities/apartment/ui/carousel-select/ApartmentCarouselSelectItemContent";
import { Button } from "@/shared/lib/shadcn/ui/button";
import { cn } from "@/shared/lib/shadcn/utils";
import { ApartmentCardModalFeature } from "../card-modal/ApartmentCardModalFeature";
import { items } from "./consts/items";

const formSchema = z.object({
  countRoom: z
    .string(),
  apartment: z
    .string(),
});

export const ApartmentSelectFormFeature: FC<ApartmentSelectFormFeatureProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countRoom: "1 комната",
      apartment: "1-2",
    },
  });
  const countRoom = form.watch("countRoom");

  const apartmentItems = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        if (i.title === countRoom) {
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

  // function onSubmit(data: z.infer<typeof formSchema>) {
  //   console.log(data);
  // }

  const apartamentId = form.watch("apartment");

  return (
    <form
      className={cn(`
        flex
        flex-col
        items-center
        gap-8
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
                case "1 комната":
                  form.setValue("apartment", "1-2");
                  break;
                case "2 комнаты":
                  form.setValue("apartment", "2-2");
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
            flex
            justify-center
            items-center
            gap-4
            overflow-hidden
          `}
          >
            {apartmentSideItems.left.map(i => (
              <ApartmentCarouselSelectItemContent
                key={i.id}
                {...i}
                disabled
                className={`
                  md:basis-60
                  shrink-0
                `}
              />
            ))}

            <ApartmentCarouselSelect
              contentClassName={`
                md:shrink-0
                max-md:max-w-88
              `}
              {...field}
              items={apartmentItems.selectable}
            />

            {apartmentSideItems.right.map(i => (
              <ApartmentCarouselSelectItemContent
                key={i.id}
                {...i}
                disabled
                className={`
                  md:basis-60
                  shrink-0
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
