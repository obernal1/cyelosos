"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const q1Options = [
  "Principalmente en el navegador (SaaS, correo, nube)",
  "Mezcla de navegador y aplicaciones de escritorio",
  "Mayoría en escritorio local",
];

const q2Options = [
  "Uso ligero (informes, plantillas sencillas)",
  "Uso medio (tablas, macros básicas)",
  "Uso intensivo (macros complejas, modelos pesados)",
];

const q3Options = [
  "No, solo ofimática y navegador",
  "Ocasionalmente (diseño ligero, lectura de planos)",
  "Sí, de forma frecuente (CAD, Adobe, sistemas legacy)",
];

const q4Options = [
  "Pocos o ninguno",
  "Tokens DIAN, lectores de cédula",
  "Varios dispositivos críticos (varios USB)",
];

export function LeadGenCuestionario() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState(5);
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = {
      q1,
      q2,
      q3,
      q4,
      q5,
      nombre,
      empresa,
      telefono,
      correo,
    };
    if (typeof window !== "undefined") {
      console.info("[Cyelos] Diagnóstico enviado (conectar a API o email)", payload);
    }
    setSent(true);
  }

  return (
    <section
      id="cuestionario"
      className="border-t border-border bg-surface-muted py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl">
            Diagnóstico rápido: ¿es CyelOS ideal para tu empresa?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Responde estas 5 preguntas en menos de 1 minuto y descubre tu
            potencial de ahorro.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-busy={sent}
        >
          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-cyelos-ink">
              1. ¿Dónde pasan tus empleados la mayor parte de su jornada laboral?
            </legend>
            <div className="space-y-2">
              {q1Options.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface-muted"
                >
                  <input
                    type="radio"
                    name="q1"
                    value={opt}
                    checked={q1 === opt}
                    onChange={() => setQ1(opt)}
                    className="mt-1 text-cyelos-primary focus:ring-cyelos-primary"
                    required
                    disabled={sent}
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-cyelos-ink">
              2. ¿Cómo usan Excel y Word en tu empresa?
            </legend>
            <div className="space-y-2">
              {q2Options.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface-muted"
                >
                  <input
                    type="radio"
                    name="q2"
                    value={opt}
                    checked={q2 === opt}
                    onChange={() => setQ2(opt)}
                    className="mt-1 text-cyelos-primary focus:ring-cyelos-primary"
                    required
                    disabled={sent}
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-cyelos-ink">
              3. ¿Utilizan software pesado (Adobe/AutoCAD) o sistemas contables muy
              antiguos?
            </legend>
            <div className="space-y-2">
              {q3Options.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface-muted"
                >
                  <input
                    type="radio"
                    name="q3"
                    value={opt}
                    checked={q3 === opt}
                    onChange={() => setQ3(opt)}
                    className="mt-1 text-cyelos-primary focus:ring-cyelos-primary"
                    required
                    disabled={sent}
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-cyelos-ink">
              4. ¿Qué dispositivos conectan por USB (tokens DIAN, biométricos)?
            </legend>
            <div className="space-y-2">
              {q4Options.map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface-muted"
                >
                  <input
                    type="radio"
                    name="q4"
                    value={opt}
                    checked={q4 === opt}
                    onChange={() => setQ4(opt)}
                    className="mt-1 text-cyelos-primary focus:ring-cyelos-primary"
                    required
                    disabled={sent}
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="q5"
              className="text-sm font-semibold text-cyelos-ink"
            >
              5. ¿Cuántos puestos de trabajo te gustaría optimizar?
            </label>
            <input
              id="q5"
              type="number"
              min={1}
              max={5000}
              value={q5}
              onChange={(e) =>
                setQ5(Math.max(1, parseInt(e.target.value, 10) || 1))
              }
              className="mt-2 block w-full max-w-xs rounded-lg border border-border px-4 py-2.5 text-slate-900 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
              required
              disabled={sent}
            />
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-cyelos-ink">
              Tus datos para el diagnóstico
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Te contactaremos por WhatsApp o correo con una lectura clara de
              ahorro y siguientes pasos.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
                  required
                  disabled={sent}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="empresa" className="text-sm font-medium text-slate-700">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  autoComplete="organization"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
                  required
                  disabled={sent}
                />
              </div>
              <div>
                <label htmlFor="telefono" className="text-sm font-medium text-slate-700">
                  Teléfono (WhatsApp)
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+57 ..."
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
                  required
                  disabled={sent}
                />
              </div>
              <div>
                <label htmlFor="correo" className="text-sm font-medium text-slate-700">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  autoComplete="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-cyelos-primary focus:ring-2 focus:ring-cyelos-primary/20"
                  required
                  disabled={sent}
                />
              </div>
            </div>
          </div>

          {sent ? (
            <p
              className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-800"
              role="status"
            >
              Gracias. Hemos registrado tu diagnóstico. Un asesor te contactará
              pronto.
            </p>
          ) : (
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyelos-primary py-3.5 text-base font-semibold text-white transition-colors hover:bg-cyelos-primary-hover sm:w-auto sm:px-10"
            >
              <Send className="h-5 w-5" />
              Obtener mi diagnóstico gratuito
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
}
