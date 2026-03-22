import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WHATSAPP = "https://api.whatsapp.com/send?phone=573045778139&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20CyelOS";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#111111] py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-md">
            <Link href="#" className="inline-flex items-center gap-3">
              <Image
                src="/images/cyelosLogo.png"
                alt="Cyelos Soluciones de Software S.A.S."
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm font-medium text-white">
              Cyelos Soluciones de Software S.A.S.
            </p>
            <p className="mt-1 text-sm text-slate-400">NIT: 901619792-1</p>
          </div>

          <div className="flex flex-col gap-3 text-sm lg:items-center lg:text-center">
            <p className="font-semibold text-white">Legal</p>
            <Link
              href="https://cyelos.com/politica-privacidad/"
              className="text-slate-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad
            </Link>
            <Link
              href="https://cyelos.com/politica-privacidad/"
              className="text-slate-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tratamiento de datos personales (Ley 1581 de 2012)
            </Link>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white">Contacto</p>
            <p className="mt-3 text-slate-400">
              Floridablanca, Santander, Colombia
            </p>
            <p className="mt-2">
              <a
                href="tel:+573045778139"
                className="text-cyelos-primary hover:underline"
              >
                +57 304 5778139
              </a>
            </p>
            <p className="mt-2">
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 text-[#25D366] transition-colors hover:text-[#20bd5a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          Tecnología eficiente para empresas inteligentes · Cyelos
        </p>
      </div>
    </footer>
  );
}
