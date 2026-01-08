import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Carrossel de Baco | Banda de Santos - SP",
  description: "Carrossel de Baco - fusão explosiva de teatro, dança, poesia e cultura caiçara. Rock, MPB, fandango com influências do Manguebeat e Tropicália.",
  keywords: ["Carrossel de Baco", "banda Santos", "música brasileira", "rock", "MPB", "fandango", "Manguebeat", "Tropicália"],
  authors: [{ name: "Carrossel de Baco" }],
  openGraph: {
    title: "Carrossel de Baco | Banda de Santos - SP",
    description: "Fusão explosiva de teatro, dança, poesia e cultura caiçara",
    type: "website",
    locale: "pt_BR",
    siteName: "Carrossel de Baco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
