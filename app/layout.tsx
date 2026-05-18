import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jose Luis Fuentes Parra | Fullstack Developer",
  description:
    "Portfolio profesional de Jose Luis Fuentes Parra - Desarrollador Fullstack especializado en crear experiencias web modernas, eficientes y elegantes.",
  keywords: [
    "Jose Luis Fuentes Parra",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Jose Luis Fuentes Parra" }],
  creator: "Jose Luis Fuentes Parra",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Jose Luis Fuentes Parra | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en crear experiencias web modernas y eficientes.",
    siteName: "Jose Luis Fuentes Parra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Luis Fuentes Parra | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en crear experiencias web modernas y eficientes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
