import localFont from "next/font/local";

const manropeFont = localFont({
  src: [
    {
      path: "./manrope-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./manrope-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./manrope-semi-bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./manrope-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./manrope-extra-light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./manrope-extra-bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

export { manropeFont };
