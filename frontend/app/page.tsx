import type { Metadata } from "next";
import Script from "next/script";
import { ComplexPage } from "@/pages/complex";

export const metadata: Metadata = {
  title: "Купить квартиру в ЖК Олимпийский Мариуполь",
  description: "Продажа квартир в новом жилом комплексе Олимпийский в Мариуполе. Ипотека. Готовые и строящиеся дома. Квартиры от застройщика с отделкой. Звоните!",
  keywords: [
    "жк олимпийский мариуполь",
    "купить квартиру мариуполь",
    "новостройки мариуполь",
    "квартиры от застройщика",
    "ипотека 2 процента",
    "жк олимпийский цены",
    "квартиры в мариуполе",
  ],
  openGraph: {
    title: "ЖК Олимпийский Мариуполь - Квартиры от застройщика",
    description: "Продажа квартир в новом ЖК. Ипотека от. Готовые дома, развитая инфраструктура.",
    url: "https://your-domain.com",
    siteName: "ЖК Олимпийский",
    images: [
      {
        url: "/images/complex/banner.png",
        width: 1200,
        height: 630,
        alt: "Жилой комплекс Олимпийский в Мариуполе",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ЖК Олимпийский Мариуполь",
    description: "Квартиры от застройщика. Ипотека",
    images: ["/images/complex/banner.png"],
  },
  alternates: {
    canonical: "https://your-domain.com", // добавить домен
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "ЖК Олимпийский",
  "description": "Жилой комплекс в Мариуполе с развитой инфраструктурой",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Мариуполь",
    "addressCountry": "RU",
  },
  "priceRange": "от 11 500₽/мес",
  "url": "https://your-domain.com",
  "image": "/images/complex/banner.png",
  "telephone": "+79499046784",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComplexPage />
    </>
  );
}
