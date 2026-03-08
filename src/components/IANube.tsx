"use client";

import { motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";

export function IANube() {
  return (
    <section id="ia-nube" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-cyelos-accent/10 px-4 py-2 text-sm font-medium text-cyelos-accent"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            La IA vive en la nube, no en tu hardware
          </motion.div>
          <motion.h2
            className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Accede a Gemini, Copilot y ChatGPT a máxima velocidad
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            No necesitas pagar millones por un &quot;AI PC&quot;. Necesitas un equipo
            eficiente que te conecte al instante a las herramientas de IA más
            potentes del mundo a través de la web.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
              <Cloud className="h-8 w-8 text-cyelos-blue" />
              <span className="text-sm font-medium text-slate-700">
                Con Cyelos, tu equipo ya está listo para la IA en la nube.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
