"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";

const DEFAULT_PUESTOS = 10;
const COSTO_PC_TRADICIONAL = 2500000;
const LICENCIAS_ANUALES = 800000;
const COSTO_CYELOS_PUESTO = 1800000;

export function CalculadoraROI() {
  const [puestos, setPuestos] = useState(DEFAULT_PUESTOS);

  const costoTraditional =
    puestos * (COSTO_PC_TRADICIONAL + LICENCIAS_ANUALES);
  const costoCyelos = puestos * COSTO_CYELOS_PUESTO;
  const ahorro = costoTraditional - costoCyelos;
  const ahorroPorcentaje =
    costoTraditional > 0
      ? Math.round((ahorro / costoTraditional) * 100)
      : 0;

  return (
    <section id="calculadora" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Calculadora de ahorro
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Compara el modelo tradicional frente a Cyelos. Licencias en Cyelos: $0.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8">
              <label
                htmlFor="puestos"
                className="block text-sm font-medium text-slate-700"
              >
                Número de puestos de trabajo
              </label>
              <input
                id="puestos"
                type="number"
                min={1}
                max={500}
                value={puestos}
                onChange={(e) =>
                  setPuestos(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
                className="mt-2 block w-full max-w-xs rounded-lg border border-border bg-white px-4 py-2.5 text-slate-900 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Modelo tradicional
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  PCs + Windows + Office (estimado año 1)
                </p>
                <p className="mt-4 text-2xl font-bold text-slate-900">
                  ${(costoTraditional / 1_000_000).toFixed(1)} M COP
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Hardware + licencias recurrentes</li>
                  <li>• Costos de licencias &gt; $0</li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-cyelos-primary bg-cyelos-primary/5 p-6">
                <p className="text-sm font-medium uppercase tracking-wide text-cyelos-primary">
                  Modelo Cyelos
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Hardware + Cyelos OS + soporte (licencias $0)
                </p>
                <p className="mt-4 text-2xl font-bold text-cyelos-primary">
                  ${(costoCyelos / 1_000_000).toFixed(1)} M COP
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Sin costos de licencias</li>
                  <li>• Soporte remoto incluido</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-xl bg-green-50 py-6 text-center">
              <TrendingDown className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Ahorro estimado año 1
                </p>
                <p className="text-2xl font-bold text-green-700 sm:text-3xl">
                  ${(ahorro / 1_000_000).toFixed(1)} M COP ({ahorroPorcentaje}%)
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Cifras ilustrativas. Solicita un diagnóstico gratuito para una
              proyección ajustada a tu empresa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
