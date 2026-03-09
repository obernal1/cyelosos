"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#el-problema", label: "El Problema" },
  { href: "#la-solucion", label: "La Solución" },
  { href: "#ia-nube", label: "IA en la Nube" },
  { href: "#calculadora", label: "Calculadora ROI" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/cyelosLogo.png"
            alt="Cyelos"
            width={128}
            height={32}
            priority
            className="h-7 w-auto"
          />
          <span className="sr-only">Cyelos</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-cyelos-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-cyelos-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyelos-primary-hover"
          >
            Diagnóstico Gratuito
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-cyelos-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#contacto"
                  className="block rounded-lg bg-cyelos-primary px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Diagnóstico Gratuito
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
