import type { ApartmentCarouselSelectItem } from "./ApartmentCarouselSelectItem";

export interface ApartmentCarouselSelectItemProps extends ApartmentCarouselSelectItem {
  checked?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
