"use client";

import { motion } from "framer-motion";
import { Monitor, CreditCard, Activity } from "lucide-react";

const cards = [
  {
    icon: Monitor,
    emoji: "🖥️",
    title: "Hardware sobredimensionado",
    description:
      "Compras equipos caros para tareas administrativas básicas cuando el trabajo real ocurre en el navegador.",
  },
  {
    icon: CreditCard,
    emoji: "💸",
    title: "La trampa de las licencias",
    description:
      "Pagas anualmente por Windows, Office y antivirus solo para abrir el mismo navegador donde ya vive tu operación.",
  },
  {
    icon: Activity,
    emoji: "🦠",
    title: "Riesgo de inactividad",
    description:
      "Un virus o un equipo lento detiene la productividad de tu empleado y el flujo de caja de tu empresa.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ElProblema() {
  return (
    <section id="el-problema" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            ¿Estás pagando por tecnología que tus empleados no necesitan?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Hoy, gran parte del trabajo corporativo ocurre en un navegador web
            (SaaS, Office 365, Google Workspace, IAs como Gemini). Sin embargo,
            muchas empresas siguen asumiendo costos ocultos en hardware y
            licencias que no se traducen en más velocidad operativa.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {card.emoji}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyelos-primary/10 text-cyelos-primary">
                  <card.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cyelos-ink">
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
