import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palworld 1.0 : Guide de Terrain Co-op",
  description:
    "Guide complet Palworld 1.0 pour une partie co-op : XP, capture, pêche, reproduction, bases, Pals de combat et farming avancé. Coordonnées, tableaux et astuces incluses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${chakra.variable} ${inter.variable} ${jetbrains.variable} ${pressStart.variable}`}
    >
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
