"use client";

import { motion } from "framer-motion";
import { Monitor, CheckCircle2 } from "lucide-react";

const points = [
  "Laptops y mini-PCs con Cyelos OS preinstalado",
  "Herramientas web (SaaS) y ofimática libre lista para usar",
  "Soporte remoto incluido para tu equipo",
  "Puestos de trabajo optimizados para tu negocio",
];

export function LaSolucion() {
  return (
    <section id="la-solucion" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-cyelos-primary to-cyelos-primary-hover shadow-xl">
              <div className="flex h-full w-full items-center justify-center">
                <Monitor className="h-24 w-24 text-white/80" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
              La solución Cyelos
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Puestos de trabajo optimizados: entregamos laptops y mini-PCs con
              Cyelos OS, herramientas web (SaaS) y ofimática libre
              preinstalada. Todo con soporte remoto incluido.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyelos-primary" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
