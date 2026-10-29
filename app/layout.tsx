import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

import CursorGlow from "@/components/effects/CursorGlow";
import SmoothScroll from "@/components/effects/SmoothScroll";
import ScrollProgress from "@/components/effects/ScrollProgress";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import EngineeringBackground from "@/components/effects/EngineeringBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ADDED metadataBase HERE
  metadataBase: new URL("https://www.cosmosindustries.co.in"),
  
  title: {
    default: "Cosmos Industries | Heavy Engineering & Fabrication",
    template: "%s | Cosmos Industries",
  },

  description:
    "Cosmos Industries is a leading manufacturer of Heavy Fabrication, CNC Machining, OEM Manufacturing, Steel Structures and Industrial Engineering solutions since 2015.",

  keywords: [
    "Heavy Fabrication",
    "CNC Machining",
    "OEM Manufacturing",
    "Industrial Engineering",
    "Steel Structures",
    "Heavy Engineering India",
    "Cosmos Industries",
  ],

  authors: [{ name: "Cosmos Industries" }],
  creator: "Cosmos Industries",

  openGraph: {
    title: "Cosmos Industries",
    description: "Heavy Engineering Solutions Since 2015",
    url: "https://www.cosmosindustries.co.in",
    siteName: "Cosmos Industries",
    images: [
      {
        url: "/og-image.jpg", // Next.js will automatically resolve this to https://www.cosmosindustries.co.in/og-image.jpg
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmos Industries",
    description: "Heavy Engineering Solutions Since 2015",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <EngineeringBackground />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}