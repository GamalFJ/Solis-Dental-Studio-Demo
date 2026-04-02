import type { Metadata } from "next";
import { Inter, Syne, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "700"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "700"], style: ["normal", "italic"] });

import { SmoothScroll } from "../components/layout/SmoothScroll";
import { CustomCursor } from "../components/ui/CustomCursor";
import { DynamicNavbar } from "../components/ui/DynamicNavbar";
import { GoldDust } from "../components/three/GoldDust";
import { StickyCTA } from "../components/ui/StickyCTA";
import Banner from "../components/Banner";
import { SuppressThreeWarnings } from "../components/SuppressThreeWarnings";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Solis Dental Studio | Modern AI Oral Ecosystem",
  description: "Designed & Developed by Purple Cove Labs",
};

import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${syne.variable} ${montserrat.variable} ${cormorant.variable} font-montserrat bg-[#0D0D0D] text-white antialiased overflow-x-hidden grain`}>
        <LanguageProvider>
          <SmoothScroll>
            <SuppressThreeWarnings />
            <Banner />
            <DynamicNavbar />
            <main className="main-offset">
              {children}
            </main>
            <Footer />
            <CustomCursor />
            <GoldDust />
            <StickyCTA />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
