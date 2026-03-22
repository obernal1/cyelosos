"use client";

import { motion } from "framer-motion";
import { Timer, CalendarDays, Handshake } from "lucide-react";

const items = [
  {
    icon: Timer,
    title: "Liquidación exacta por minutos",
    text: "No te cobramos una hora completa por una consulta de cinco minutos.",
  },
  {
    icon: CalendarDays,
    title: "Acumulación trimestral",
    text: "Las horas que no uses este mes se guardan para el siguiente trimestre.",
  },
  {
    icon: Handshake,
    title: "Un solo proveedor",
    text: "Soportamos equipos CyelOS y también tus equipos Windows cuando haga falta.",
  },
];

export function SoporteInteligente() {
  return (
    <section
      id="soporte-inteligente"
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            Soporte técnico transparente: pagas solo lo que usas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Olvídate de contratos rígidos y costos opacos. Nuestro modelo se basa
            en una{" "}
            <strong className="font-semibold text-cyelos-ink">
              bolsa de horas corporativa
            </strong>{" "}
            con reglas claras para que tu presupuesto de soporte sea predecible y
            justo.
          </p>
        </motion.div>

        <motion.ul
          className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {items.map((item) => (
            <motion.li
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-border bg-surface-muted p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyelos-primary/10 text-cyelos-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-cyelos-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
