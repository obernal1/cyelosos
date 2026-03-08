import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyelos | Reduce hasta 40% los costos tecnológicos de tu empresa",
  description:
    "Equipos optimizados, cero costos en licencias, máxima seguridad y listos para Inteligencia Artificial en la nube. Tecnología eficiente para pymes en Colombia.",
  keywords: ["pymes Colombia", "ahorro tecnología", "Cyelos OS", "costos TI", "software legal"],
  openGraph: {
    title: "Cyelos | Reduce costos tecnológicos sin sacrificar productividad",
    description: "Hardware + Sistema Operativo + Soporte + IA en la nube para empresas inteligentes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
