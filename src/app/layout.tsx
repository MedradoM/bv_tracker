import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import Header from "@/components/header";
import ScrollProvider from "@/context/scrollContext";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bv Tracker",
  description: "Bv Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth text-chart-1`}
      >
        <ReactLenis root>
          <ScrollProvider>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </ScrollProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
