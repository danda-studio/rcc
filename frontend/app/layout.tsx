import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "@/shared";
import { manropeFont } from "@/shared/styles/fonts/manrope";
import { UILayout } from "@/shared/ui/layout";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
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
        <link
          rel="preload"
          as="image"
          href="/images/complex/banner.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Yandex.Metrika */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105547532', 'ym');

              ym(105547532, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
          }}
        />

        {/* Pixel */}
        <Script
          id="pixel"
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, w) {
              var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://qoopler.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
              n.parentNode.insertBefore(s, n);
              })(document, window);
            `,
          }}
        />

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
