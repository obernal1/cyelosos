"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cloud,
  Shield,
  Layers,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Cloud,
    title: "Rendimiento nube e IA",
    text: "Diseñado para que herramientas como Gemini, Copilot o tu ERP web respondan sin cuellos de botella.",
  },
  {
    icon: Shield,
    title: "Seguridad inquebrantable",
    text: "Arquitectura orientada a reducir drásticamente el riesgo de ransomware y amenazas habituales contra pymes en Colombia.",
  },
  {
    icon: Layers,
    title: "Versatilidad híbrida",
    text: "¿Tu contador necesita Windows para macros complejas? Proveemos entornos mixtos bajo un solo proveedor.",
  },
];

export function LaSolucionCyelos() {
  return (
    <section
      id="la-solucion-cyelos"
      className="border-y border-border bg-surface-muted py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
              Conoce CyelOS: obsolescencia programada cero
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              En Cyelos no vendemos computadores aislados; implementamos{" "}
              <strong className="font-semibold text-cyelos-ink">
                puestos de trabajo integrales
              </strong>
              . Usamos hardware de alto rendimiento (16 GB de RAM y SSD)
              potenciado por CyelOS, nuestro sistema operativo corporativo de
              software libre, alineado a eficiencia y ahorro.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Menos fricción entre tu equipo y las apps en la nube.",
                "Menos costos recurrentes en licencias que no agregan margen.",
                "Más previsibilidad financiera en tu presupuesto de TI.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyelos-primary" />
                  <span className="text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyelos-primary/10 text-cyelos-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyelos-ink">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {b.text}
                    </p>
                    {b.title === "Seguridad inquebrantable" && (
                      <p className="mt-3">
                        <Link
                          href="#referencias-ciberseguridad-pymes"
                          className="text-sm font-semibold text-cyelos-primary hover:underline"
                        >
                          Ver contexto y fuentes sobre pymes en Colombia →
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
