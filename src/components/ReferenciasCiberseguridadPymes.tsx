"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield } from "lucide-react";

const articulos = [
  {
    href: "https://www.suarezconsultoria.com/post/colombia-registr%C3%B3-36-000-millones-de-intentos-de-ciberataques-en-2024-pymes-son-las-m%C3%A1s-vulnerables",
    fuente: "Suárez Consultoría",
    titulo:
      "Colombia registró 36.000 millones de intentos de ciberataques en 2024: pymes son las más vulnerables",
    resumen:
      "Informes de ciberseguridad en Colombia y el rol de las pymes como blanco frecuente por brechas de infraestructura y cultura.",
  },
  {
    href: "https://portalerp.com.co/ransomware-en-colombia-mas-de-35-millones-de-intentos-en-el-ultimo-ano",
    fuente: "Portal ERP Colombia",
    titulo: "Ransomware en Colombia: más de 35 millones de intentos en el último año",
    resumen:
      "Panorama regional de intentos de ransomware y medidas preventivas recomendadas para empresas.",
  },
  {
    href: "https://folou.co/mundo/seguridad/ciberseguridad-pymes-2024/",
    fuente: "FOLOU",
    titulo:
      "Ciberseguridad en las PyMEs: un promedio de 16 incidentes durante el 2024",
    resumen:
      "Estudio sobre frecuencia de incidentes en pymes y costos de remediación frente al presupuesto de seguridad.",
  },
];

export function ReferenciasCiberseguridadPymes() {
  return (
    <section
      id="referencias-ciberseguridad-pymes"
      className="border-b border-border bg-white py-16 sm:py-24"
      aria-labelledby="heading-ciberseguridad-contexto"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyelos-primary/10 px-4 py-2 text-sm font-medium text-cyelos-primary">
            <Shield className="h-4 w-4" aria-hidden />
            Seguridad con contexto real
          </div>
          <h2
            id="heading-ciberseguridad-contexto"
            className="mt-5 text-3xl font-bold tracking-tight text-cyelos-ink sm:text-4xl"
          >
            Las pymes en Colombia enfrentan un riesgo creciente
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Lo que en CyelOS llamamos{" "}
            <strong className="font-semibold text-cyelos-ink">
              seguridad inquebrantable
            </strong>{" "}
            no es un eslogan: parte de entender que el entorno financiero y
            operativo de las pymes se ve presionado por{" "}
            <strong className="font-semibold text-cyelos-ink">
              ransomware, phishing y sistemas desactualizados
            </strong>
            . Fuentes independientes describen el volumen de amenazas y la
            exposición del segmento PYME. CyelOS se plantea como una capa de
            trabajo corporativo más limpia y predecible frente a ese escenario.
          </p>
        </div>

        <motion.ul
          className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {articulos.map((a) => (
            <motion.li
              key={a.href}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-cyelos-primary">
                {a.fuente}
              </p>
              <h3 className="mt-2 flex-1 text-base font-semibold leading-snug text-cyelos-ink">
                {a.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {a.resumen}
              </p>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyelos-primary hover:underline"
              >
                Leer artículo
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600">
          CyelOS reduce superficies de ataque habituales en escritorios
          sobredimensionados y costos ocultos en licencias, para que inviertas
          en continuidad del negocio, no solo en &quot;parches&quot; reactivos.
        </p>
      </div>
    </section>
  );
}
