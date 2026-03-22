import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ElProblema } from "@/components/ElProblema";
import { LaSolucionCyelos } from "@/components/LaSolucionCyelos";
import { ReferenciasCiberseguridadPymes } from "@/components/ReferenciasCiberseguridadPymes";
import { OpcionesPlanes } from "@/components/OpcionesPlanes";
import { ROITabla } from "@/components/ROITabla";
import { SoporteInteligente } from "@/components/SoporteInteligente";
import { LeadGenCuestionario } from "@/components/LeadGenCuestionario";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElProblema />
        <LaSolucionCyelos />
        <ReferenciasCiberseguridadPymes />
        <OpcionesPlanes />
        <ROITabla />
        <SoporteInteligente />
        <LeadGenCuestionario />
        <Footer />
      </main>
    </>
  );
}
