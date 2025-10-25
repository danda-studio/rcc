import type { Apartment } from "../types/Apartment";

export const APARTMENTS: Apartment[] = [
  {
    id: "1a",
    area: {
      total: 40.76,
      life: 14.02,
      kitchen: 10.13,
      hallway: 7.7,
      bathroom: 4.68,
      balcony: 4.23,
    },
    floors: [2, 3, 4, 7, 8, 9, 11],
    image: {
      card: "/images/apartment/plan/1/a/3d.webp",
      carousel: [
        "/images/apartment/plan/1/a/3d.webp",
        "/images/apartment/plan/1/a/2d-m.webp",
      ],
    },
    title: "1 комната",
  },
];
