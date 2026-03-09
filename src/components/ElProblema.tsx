"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldAlert, DollarSign } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Hardware sobredimensionado",
    description:
      "Comprar equipos de alto rendimiento para tareas cotidianas es como comprar un Ferrari para ir al supermercado. Pagas de más sin necesidad.",
  },
  {
    icon: DollarSign,
    title: "Licencias costosas y piratería",
    description:
      "Windows y Office representan un gasto recurrente. La piratería pone a tu empresa en riesgo de multas y sanciones por uso de software ilegal.",
  },
  {
    icon: ShieldAlert,
    title: "Vulnerabilidad y tiempos caídos",
    description:
      "Ransomware y virus pueden paralizar tu operación. Equipos desactualizados o sin soporte adecuado aumentan el riesgo y los costos de recuperación.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ElProblema() {
  return (
    <section id="el-problema" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            Por qué estás perdiendo dinero
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tres problemas que afectan a la mayoría de las pymes en tecnología.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyelos-primary/10 text-cyelos-primary">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-slate-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
