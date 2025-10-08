import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const guessSans = localFont({
  src: "./guess-sans.otf",
  variable: "--font-guess-sans",
  display: "swap",
});

const guessSansUltra = localFont({
  src: "./guess-sans-ultra.otf",
  variable: "--font-guess-sans-ultra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Multifly",
  description: "Events Flying Above",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${guessSans.variable} ${guessSansUltra.variable}`}>
        {children}
      </body>
    </html>
  );
}
