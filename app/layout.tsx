// import PortfolioBackground from "@/components/ui/bg";
import MultiCursor from "@/components/MultiCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackgroundShader from "@/components/ui/shaderbg";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const soria = localFont({
  src: "../fonts/soria-font.ttf",
  variable: "--font-soria",
  display: "swap",
});

const chunk = localFont({
  src: "../fonts/chunk-font.ttf",
  variable: "--font-chunk",
  display: "swap",
});

const alexbrush = localFont({
  src: "../fonts/alexbrush-font.ttf",
  variable: "--font-alexbrush",
  display: "swap",
});

const brolimo = localFont({
  src: "../fonts/BrolimoRegular.ttf",
  variable: "--font-brolimo",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Engineered with precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${brolimo.variable} ${alexbrush.variable} ${soria.variable} ${chunk.variable} ${geistSans.variable} ${geistMono.variable} antialiased relative bg-black`}
      >
        <SmoothScrollProvider>
          {/* <PortfolioBackground /> */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <BackgroundShader />
          </div>
          <MultiCursor />
          <div className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
