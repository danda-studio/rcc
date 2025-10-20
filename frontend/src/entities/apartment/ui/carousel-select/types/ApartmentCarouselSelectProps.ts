import type { ApartmentCarouselSelectItem } from "./ApartmentCarouselSelectItem";

export interface ApartmentCarouselSelectProps {
  items: ApartmentCarouselSelectItem[];
  value: string;
  onChange: (...event: any[]) => void;
  className?: string;
}
