import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const SITE_URL = "https://golden-liz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Golden Liz | Boutique Cosmetics & Jewellery",
  description:
    "Shop curated cosmetics, skincare, fragrance, and jewellery. A premium boutique experience built for women who move with intention.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Golden Liz",
    title: "Golden Liz | Boutique Cosmetics & Jewellery",
    description:
      "Shop curated cosmetics, skincare, fragrance, and jewellery. A premium boutique experience built for women who move with intention.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Golden Liz — Boutique Cosmetics & Jewellery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Liz | Boutique Cosmetics & Jewellery",
    description:
      "Shop curated cosmetics, skincare, fragrance, and jewellery. A premium boutique experience.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
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
