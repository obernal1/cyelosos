"use client";

import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";

export function OpcionesPlanes() {
  return (
    <section id="planes" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            Adaptamos la tecnología a tu presupuesto
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dos caminos claros: inversión a largo plazo o ahorro inmediato en
            lo que ya tienes.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.article
            className="flex flex-col rounded-2xl border-2 border-cyelos-primary bg-cyelos-primary/[0.04] p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <div className="flex items-center gap-3 text-cyelos-primary">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Renovación total
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-cyelos-ink">
              Equipos nuevos
            </h3>
            <p className="mt-3 flex-1 text-slate-600">
              Puestos de trabajo élite (Intel i5 / Ryzen 5) listos para
              producción en la nube, con CyelOS y estándares corporativos de
              rendimiento.
            </p>
            <p className="mt-6 rounded-lg bg-white/80 px-4 py-3 text-sm font-medium text-cyelos-ink ring-1 ring-cyelos-primary/20">
              La inversión más inteligente a largo plazo
            </p>
          </motion.article>

          <motion.article
            className="flex flex-col rounded-2xl border border-border bg-surface-muted p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 text-cyelos-primary">
              <RefreshCw className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Remanufacturación
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-cyelos-ink">
              Revive tus PCs
            </h3>
            <p className="mt-3 flex-1 text-slate-600">
              Potenciamos tus equipos actuales (menores a 5 años) con SSD, más
              memoria RAM y la velocidad de CyelOS para alargar la vida útil sin
              comprar flota completa.
            </p>
            <p className="mt-6 rounded-lg bg-white px-4 py-3 text-sm font-medium text-cyelos-ink ring-1 ring-border">
              Ahorro radical inmediato
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
