"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-surface-muted to-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-cyelos-ink sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reduce hasta un{" "}
            <span className="text-cyelos-primary">40%</span> los costos
            tecnológicos de tu empresa sin sacrificar productividad.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Equipos optimizados, cero costos en licencias, máxima seguridad y
            listos para la Inteligencia Artificial en la nube.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#calculadora"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyelos-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-cyelos-primary-hover hover:shadow-xl sm:w-auto"
            >
              <Calculator className="h-5 w-5" />
              Calcula tu ahorro hoy
            </Link>
            <Link
              href="#la-solucion"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-border bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-cyelos-primary hover:bg-surface-muted hover:text-cyelos-primary sm:w-auto"
            >
              <PlayCircle className="h-5 w-5" />
              Conoce cómo funciona
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
