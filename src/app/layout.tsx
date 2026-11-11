import type { Metadata, Viewport } from "next";
import { Nunito, Baloo_2, Caveat } from "next/font/google";
import { doctor } from "@/data";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });
const baloo = Baloo_2({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap", variable: "--font-baloo" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap", variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} en ${doctor.city}, ${doctor.state}. Control del niño sano, vacunación y atención de enfermedades comunes de la infancia.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: `${doctor.title} ${doctor.name} — Pediatra` }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#788ec6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${nunito.variable} ${baloo.variable} ${caveat.variable} font-sans`}>
      <body className="pb-24 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
