import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLdOrganization } from "@/components/JsonLdOrganization";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyelos.com"),
  title:
    "Cyelos | Reduce tu presupuesto tecnológico sin frenar tu operación",
  description:
    "Puestos de trabajo corporativos optimizados con CyelOS: cero costos en licencias Windows/Office, menor riesgo de ransomware y soporte transparente por bolsa de horas. Ideal para pymes en Colombia.",
  keywords: [
    "Cyelos",
    "CyelOS",
    "pymes Colombia",
    "ahorro en tecnología",
    "reducción costos TI",
    "sin licencias Windows",
    "ransomware pymes",
    "soporte TI Colombia",
    "Floridablanca",
  ],
  openGraph: {
    title:
      "CyelOS · Ahorro y eficiencia en puestos de trabajo para empresas",
    description:
      "Renovación total o remanufacturación de PCs, CyelOS y soporte con reglas claras. Diagnóstico rápido en 1 minuto.",
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
      "Cyelos | Presupuesto TI bajo control con CyelOS",
    description:
      "Menos licencias, más velocidad en la nube y soporte que pagas por minuto real.",
    images: ["/images/cyelosLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLdOrganization />
        {children}
      </body>
    </html>
  );
}
