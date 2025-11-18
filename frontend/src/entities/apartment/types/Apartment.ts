export interface Apartment {
  id: string;
  room: number;
  area: {
    total: number;
    life: number;
    kitchen: number;
    hallway: number;
    bathroom: number;
    balcony?: number[];
    tambour?: number;
  };
  image: {
    card: string;
    carousel: string[];
  };
}
