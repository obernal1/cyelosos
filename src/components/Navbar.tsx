"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#el-problema", label: "El Problema" },
  { href: "#la-solucion-cyelos", label: "La Solución CyelOS" },
  { href: "#soporte-inteligente", label: "Soporte Inteligente" },
  { href: "#planes", label: "Planes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 lg:gap-6">
        <Link
          href="#"
          className="flex shrink-0 items-center gap-2 justify-self-start"
        >
          <Image
            src="/images/cyelosLogo.png"
            alt="Cyelos Soluciones de Software"
            width={160}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <span className="sr-only">Cyelos Soluciones de Software</span>
        </Link>

        <ul className="hidden items-center justify-center gap-4 text-center lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-cyelos-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 justify-self-end">
          <Link
            href="#cuestionario"
            className="hidden rounded-lg bg-cyelos-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyelos-primary-hover sm:inline-flex sm:items-center sm:justify-center"
          >
            Evalúa tu Empresa
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-surface-muted hover:text-cyelos-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#cuestionario"
                  className="block rounded-lg bg-cyelos-primary px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Evalúa tu Empresa
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
