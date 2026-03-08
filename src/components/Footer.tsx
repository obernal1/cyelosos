"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#el-problema", label: "El Problema" },
  { href: "#la-solucion", label: "La Solución" },
  { href: "#ia-nube", label: "IA en la Nube" },
  { href: "#calculadora", label: "Calculadora ROI" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-bold text-white">Cyelos</p>
            <p className="mt-2 max-w-sm text-sm">
              Tecnología eficiente para empresas inteligentes.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Colombia · Contacto comercial:{" "}
            <a
              href="mailto:contacto@cyelos.com"
              className="text-cyelos-accent hover:underline"
            >
              contacto@cyelos.com
            </a>
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300">
              Términos de uso
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
