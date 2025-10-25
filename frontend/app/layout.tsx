import type { Metadata } from "next";
import { Providers, UILayout } from "@/shared";
import { manropeFont } from "@/shared/styles/fonts/manrope";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // наш домен
  title: {
    template: "%s | ЖК Олимпийский",
    default: "ЖК Олимпийский - Новостройки в Мариуполе",
  },
  description: "Официальный сайт жилого комплекса Олимпийский в Мариуполе",
  keywords: ["жилой комплекс", "новостройки", "Мариуполь", "купить квартиру"],
  authors: [{ name: "ЖК Олимпийский" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ЖК Олимпийский",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manropeFont.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>
          <UILayout>
            {children}
          </UILayout>
        </Providers>
      </body>
    </html>
  );
}
