import type { Apartment } from "../types/Apartment";

export const APARTMENTS: Apartment[] = [
  {
    id: "1a",
    room: 1,
    title: "1 комната",
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
  },
  {
    id: "1b",
    room: 1,
    title: "1 комната",
    area: {
      total: 45.10,
      life: 19.62,
      kitchen: 9.14,
      hallway: 7.01,
      bathroom: 4.60,
      balcony: 4.65,
    },
    floors: [3, 4, 6, 7, 8, 9, 10],
    image: {
      card: "/images/apartment/plan/1/b/3d.webp",
      carousel: [
        "/images/apartment/plan/1/b/3d.webp",
        "/images/apartment/plan/1/b/2d-m.webp",
      ],
    },
  },
  {
    id: "1с",
    room: 1,
    title: "1 комната",
    area: {
      total: 37.80,
      life: 13.96,
      kitchen: 8.67,
      hallway: 6.30,
      bathroom: 4.22,
      balcony: 4.65,
    },
    floors: [3, 7, 9, 10],
    image: {
      card: "/images/apartment/plan/1/v/3d.webp",
      carousel: [
        "/images/apartment/plan/1/v/3d.webp",
        "/images/apartment/plan/1/v/2d-m.webp",
      ],
    },
  },

];
