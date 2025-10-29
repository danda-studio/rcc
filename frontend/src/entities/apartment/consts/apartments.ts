import type { Apartment } from "../types/Apartment";

export const APARTMENTS: Apartment[] = [
  {
    id: "1А",
    room: 1,
    area: {
      total: 40.76,
      life: 14.02,
      kitchen: 10.13,
      hallway: 7.7,
      bathroom: 4.68,
      balcony: [4.23],
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
    id: "1Б",
    room: 1,
    area: {
      total: 45.10,
      life: 19.62,
      kitchen: 9.14,
      hallway: 7.01,
      bathroom: 4.60,
      balcony: [4.65],
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
    id: "1В",
    room: 1,
    area: {
      total: 37.80,
      life: 13.96,
      kitchen: 8.67,
      hallway: 6.30,
      bathroom: 4.22,
      balcony: [4.65],
    },
    floors: [3, 7, 9, 10],
    image: {
      card: "/images/apartment/plan/1/c/3d.webp",
      carousel: [
        "/images/apartment/plan/1/c/3d.webp",
        "/images/apartment/plan/1/c/2d-m.webp",
      ],
    },
  },

  {
    id: "2А",
    room: 2,
    area: {
      total: 49.21,
      life: 24.28,
      kitchen: 8.99,
      hallway: 6.83,
      bathroom: 4.88,
      tambour: 2.32,
    },
    floors: [2, 3, 6, 8, 9, 10, 11, 12],
    image: {
      card: "/images/apartment/plan/2/a/3d.webp",
      carousel: [
        "/images/apartment/plan/2/a/3d.webp",
        "/images/apartment/plan/2/a/2d-m.webp",
      ],
    },
  },
  {
    id: "2Б",
    room: 2,
    area: {
      total: 60.72,
      life: 25.40,
      kitchen: 8.69,
      hallway: 11.31,
      bathroom: 4.99,
      balcony: [4.65, 5.68],
    },
    floors: [2, 3, 6, 8, 9, 10, 11, 12],
    image: {
      card: "/images/apartment/plan/2/b/3d.webp",
      carousel: [
        "/images/apartment/plan/2/b/3d.webp",
        "/images/apartment/plan/2/b/2d-m.webp",
      ],
    },
  },
  {
    id: "2В",
    room: 2,
    area: {
      total: 64.36,
      life: 27.71,
      kitchen: 9.94,
      hallway: 11.28,
      bathroom: 4.68,
      balcony: [5.49],
    },
    floors: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    image: {
      card: "/images/apartment/plan/2/c/3d.webp",
      carousel: [
        "/images/apartment/plan/2/c/3d.webp",
        "/images/apartment/plan/2/c/2d-m.webp",
      ],
    },
  },
  {
    id: "2Г",
    room: 2,
    area: {
      total: 53.86,
      life: 24.92,
      kitchen: 8.96,
      hallway: 9.11,
      bathroom: 6.29,
      balcony: [4.58],
    },
    floors: [2, 3, 4, 10, 12],
    image: {
      card: "/images/apartment/plan/2/d/3d.webp",
      carousel: [
        "/images/apartment/plan/2/d/3d.webp",
        "/images/apartment/plan/2/d/2d-m.webp",
      ],
    },
  },

];
