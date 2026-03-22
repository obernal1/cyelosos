"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted to-white pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.h1
              className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Reduce tu presupuesto tecnológico sin sacrificar la velocidad de
              tu operación.
            </motion.h1>
            <motion.h2
              className="mt-5 text-lg font-semibold leading-relaxed text-slate-600 sm:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              Entregamos &quot;Puestos de Trabajo&quot; corporativos optimizados.
              Cero costos en licencias, máxima seguridad contra ransomware y
              rendimiento garantizado a largo plazo para empresas que trabajan en
              la nube.
            </motion.h2>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <Link
                href="#cuestionario"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyelos-primary px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-cyelos-primary-hover hover:shadow-lg sm:w-auto"
              >
                Descubre cuánto puedes ahorrar
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="#la-solucion-cyelos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-border bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-cyelos-primary hover:bg-surface-muted hover:text-cyelos-primary sm:w-auto"
              >
                <PlayCircle className="h-5 w-5" aria-hidden />
                Ver cómo funciona
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-xl">
              <Image
                src={HERO_IMAGE}
                alt="Oficina moderna con escritorio minimalista y trabajo en la nube"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyelos-primary">
                  Comparación ilustrativa
                </p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between gap-4 text-slate-600">
                    <span>Factura tradicional (licencias)</span>
                    <span className="font-semibold text-red-600 line-through decoration-red-400">
                      Alto
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 text-slate-700">
                    <span>Con CyelOS (sin licencias)</span>
                    <span className="font-bold text-cyelos-primary">
                      Ahorro claro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
