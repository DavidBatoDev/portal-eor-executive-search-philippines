import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { SmoothAnchors } from "@/components/layout/SmoothAnchors";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal — Philippine Workforce Solutions",
  description:
    "Employer of Record, Executive Search, Manpower, Payroll, and HR outsourcing across the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body text-body antialiased text-[17px] leading-[1.7]">
        <SmoothAnchors />
        <Nav />
        {children}
        {/* No global <Footer> here: inner service pages omit it (§6).
            Compose <Footer> per-page on the homepage and other pages that keep it. */}
      </body>
    </html>
  );
}
