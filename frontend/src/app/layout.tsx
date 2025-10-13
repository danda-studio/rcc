import type { Metadata } from "next";
import "../shared/styles/globals.css";
import {ReduxProvider} from "@/shared/redux/provider/ReduxProvider";

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
    <html lang="en">
      <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
