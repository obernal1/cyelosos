import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyelos.com"),
  title:
    "Cyelos | Reduce hasta 40% los costos tecnológicos de tu empresa sin sacrificar productividad",
  description:
    "Cyelos ayuda a las pymes en Colombia a reducir hasta un 40% sus costos tecnológicos reemplazando PCs costosos por equipos optimizados con Cyelos OS, sin licencias y listos para IA en la nube.",
  keywords: [
    "Cyelos",
    "pymes Colombia",
    "ahorro en tecnología",
    "reducción de costos TI",
    "software legal",
    "seguridad contra ransomware",
    "IA en la nube",
  ],
  openGraph: {
    title:
      "Cyelos | Tecnología eficiente para empresas inteligentes en Colombia",
    description:
      "Hardware + Cyelos OS + soporte remoto + acceso a IA en la nube (Gemini, Copilot, ChatGPT) sin pagar licencias.",
    url: "https://cyelos.com",
    siteName: "Cyelos",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/images/cyelosLogo.png",
        width: 512,
        height: 512,
        alt: "Cyelos - Tecnología eficiente para empresas inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cyelos | Reduce hasta 40% los costos tecnológicos de tu empresa sin sacrificar productividad",
    description:
      "Equipos optimizados, sin licencias y listos para IA en la nube. Ideal para pymes en Colombia.",
    images: ["/images/cyelosLogo.png"],
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
