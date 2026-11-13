import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import { business, SITE_URL } from "@/data/business";
import { services } from "@/data/services";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Laundromat & Dry Cleaners in Brookshire, TX | Brookshire Washateria",
    template: "%s",
  },
  description:
    "Brookshire's laundromat, same-day wash & fold and dry cleaners on FM 359. Comforter cleaning, ironing, RIA money transfer and bill pay. Open 7am–9pm daily.",
  applicationName: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: business.name }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2f4d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-14 md:pb-0">
        <JsonLd data={[localBusinessSchema(), organizationSchema()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header services={services.map(({ slug, name }) => ({ slug, name }))} />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
