import type { Metadata } from "next";
import { manropeFont } from "@/shared/styles/fonts/manrope";
import "../shared/styles/globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manropeFont.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
