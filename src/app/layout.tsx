import { playfair, cormorant, openSans } from "@/lib/fonts";
import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghare Baire – Royal Dining Experience in Basirhat",
  description:
    "Experience the heritage of Mughal culinary excellence at Ghare Baire. Premium dining, private rooms, signature biryanis, and unforgettable events in Basirhat.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
