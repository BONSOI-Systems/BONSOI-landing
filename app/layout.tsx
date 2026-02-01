import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cinzel_Decorative, Blinker } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PopupWidget } from "../components/PopupWidget";


const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

const blinker = Blinker({
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  variable: '--font-blinker',
});

export const metadata: Metadata = {
  title: "BONSOI Systems | Enterprise AI/ML & Full-Stack Solutions",
  description: "Leading provider of enterprise-grade AI/ML, Web3, and Full-Stack development solutions. Transform your business with cutting-edge technology and expert engineering.",
  keywords: "AI, ML, Machine Learning, Web3, Blockchain, Full-Stack Development, Enterprise Solutions",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${jetbrainsMono.variable} ${cinzel.variable} ${blinker.variable}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
