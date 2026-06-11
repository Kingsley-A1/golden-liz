import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Liz | Boutique Cosmetics & Jewellery",
  description: "A premium mobile-first boutique store for cosmetics, skincare, fragrance, and jewellery essentials for women.",
  metadataBase: new URL("https://golden-liz-demo.vercel.app"),
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
