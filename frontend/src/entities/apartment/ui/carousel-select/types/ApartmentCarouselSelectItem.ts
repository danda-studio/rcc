export interface ApartmentCarouselSelectItem {
  id: string;
  title: string;
  area: {
    total: number;
    life: number;
    kitchen: number;
    hallway: number;
    bathroom: number;
    balcony: number;
  };
  floors: number[];
  image: string;
}
