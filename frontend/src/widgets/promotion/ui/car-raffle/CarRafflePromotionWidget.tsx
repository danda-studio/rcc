"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { CarRafflePromotion } from "@/entities/promotion";
import { ContactFormModalFeature } from "@/features/contact/ui/form";
import { Button } from "@/shared/lib/shadcn/ui/button";

export const CarRafflePromotionWidget: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CarRafflePromotion
      className={`
        fixed right-1 bottom-1
        max-md:left-1
        md:right-6 md:bottom-6 md:w-123
      `}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <ContactFormModalFeature>
        <Button className="w-full" variant="default" size="md">
          Подобрать квартиру
        </Button>
      </ContactFormModalFeature>
    </CarRafflePromotion>
  );
};
