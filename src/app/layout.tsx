import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Aximora — Vietnam Sourcing Partner", template: "%s — Aximora" },
  description: "On-ground sourcing team in Ho Chi Minh City. We connect global buyers with verified Vietnamese factories.",
  keywords: ["Vietnam sourcing", "Vietnam factory", "Vietnam furniture manufacturer", "sourcing agent Vietnam"],
  openGraph: { type: "website", locale: "en_US", url: "https://aximora.co", siteName: "Aximora Global Trading" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aximora Global Trading",
  url: "https://aximora.co",
  description: "Vietnam-based sourcing company connecting global buyers with verified manufacturers.",
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
  areaServed: ["US", "CA", "AU", "GB"],
  knowsLanguage: ["en", "vi", "zh"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-black text-text">
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
