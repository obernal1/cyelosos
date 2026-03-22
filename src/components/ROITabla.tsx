"use client";

import { motion } from "framer-motion";

const rows = [
  {
    concepto: "Licencia Windows 11 Pro",
    tradicional: "$800.000 COP",
    cyelos: "$0 COP",
    ahorro: "$800.000 COP",
  },
  {
    concepto: "Suscripción Office + Antivirus",
    tradicional: "$550.000 COP",
    cyelos: "$0 COP",
    ahorro: "$550.000 COP",
  },
];

export function ROITabla() {
  return (
    <section id="roi" className="border-t border-border bg-surface-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            Los números no mienten: tu ahorro por cada puesto de trabajo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Comparación directa de gasto recurrente típico frente a CyelOS.
            Cifras orientativas para conversación con tu área financiera.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-slate-50">
                  <th className="px-4 py-4 font-semibold text-cyelos-ink sm:px-6">
                    Gasto tradicional (por PC)
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-600 sm:px-6">
                    Costo promedio
                  </th>
                  <th className="px-4 py-4 font-semibold text-cyelos-primary sm:px-6">
                    Con CyelOS
                  </th>
                  <th className="px-4 py-4 font-semibold text-green-700 sm:px-6">
                    Tu ahorro
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.concepto}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-4 py-4 text-slate-700 sm:px-6">
                      {row.concepto}
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-900 sm:px-6">
                      {row.tradicional}
                    </td>
                    <td className="px-4 py-4 font-semibold text-cyelos-primary sm:px-6">
                      {row.cyelos}
                    </td>
                    <td className="px-4 py-4 font-semibold text-green-700 sm:px-6">
                      {row.ahorro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-border bg-cyelos-primary/5 px-4 py-6 sm:px-6">
            <p className="text-center text-base font-bold text-cyelos-ink">
              Total ahorro directo:{" "}
              <span className="text-cyelos-primary">$1.350.000 COP por PC</span>
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600">
              Multiplica este valor por la cantidad de empleados en tu empresa.
              ¿En qué área de tu negocio preferirías invertir ese dinero?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
