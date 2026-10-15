import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Instrument_Serif,
  Anton,
  Reenie_Beanie,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BentoFooter } from "@/components/layout/BentoFooter";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-condensed",
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT-49-03 | Official University Class Portal",
  description:
    "Official showcase of IT-49-03 (S1 Teknologi Informasi) — 42 members, LinkedIn directory, and cohort achievements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${anton.variable} ${reenieBeanie.variable}`}
    >
      <body className="min-h-screen bg-canvas text-primary antialiased selection:bg-emeraldGlow selection:text-white">
        {/* Subtle SVG Film Grain Overlay (Ref 2) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035]"
        >
          <filter id="it4903-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#it4903-grain)" />
        </svg>

        {/* Outer Boxed Frame Container (Ref 1) */}
        <div className="max-w-[1320px] mx-auto my-3 sm:my-6 rounded-[28px] sm:rounded-[32px] border border-white/10 bg-elevated overflow-hidden shadow-2xl">
          <Navbar />
          <main>{children}</main>
          <BentoFooter />
        </div>
      </body>
    </html>
  );
}