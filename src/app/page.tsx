import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ElProblema } from "@/components/ElProblema";
import { LaSolucion } from "@/components/LaSolucion";
import { IANube } from "@/components/IANube";
import { CalculadoraROI } from "@/components/CalculadoraROI";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElProblema />
        <LaSolucion />
        <IANube />
        <CalculadoraROI />
        <Footer />
      </main>
    </>
  );
}
