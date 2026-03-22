# Cyelos · CyelOS — Landing web

Repositorio de la **landing page** de **Cyelos Soluciones de Software S.A.S.** orientada a **resultados financieros y operativos**: ahorro en presupuesto TI, puestos de trabajo con **CyelOS**, seguridad frente a amenazas habituales en pymes, soporte por bolsa de horas y **lead generation** mediante cuestionario. Pensada para **deploy en Vercel** (Next.js estático/SSR según rutas).

Este documento resume **contexto de negocio, diseño, arquitectura técnica y convenciones** para que cualquier persona (o IA) pueda **continuar el proyecto** sin perder el hilo.

---

## 1. Contexto de negocio

| Tema | Detalle |
|------|---------|
| **Empresa** | Cyelos Soluciones de Software S.A.S. |
| **NIT** | 901619792-1 |
| **Ubicación** | Floridablanca, Santander, Colombia |
| **Producto / mensaje** | **CyelOS**: sistema operativo corporativo de software libre sobre hardware optimizado (p. ej. 16 GB RAM, SSD); **puestos de trabajo integrales** (no “solo vender PCs”). |
| **Propuesta** | Reducir **presupuesto tecnológico** sin frenar la operación: **cero costos en licencias** típicas (Windows/Office en el modelo comparativo), foco en **nube/SaaS**, menor exposición a **ransomware** y costos ocultos. |
| **Oferta comercial** | Renovación con equipos nuevos **o** remanufacturación de flota &lt; 5 años. |
| **Soporte** | Modelo de **bolsa de horas**: liquidación por minutos, acumulación trimestral, un solo proveedor (CyelOS + Windows cuando aplique). |
| **Público** | Pymes en Colombia, lenguaje **consultivo y financiero** (presupuesto, ahorro, riesgo, continuidad). |
| **Tono** | **No** usar jerga técnica de sistemas operativos “de nicho” (Linux, kernel, etc.) en el copy público; hablar de **ahorro, eficiencia, seguridad, legalidad de software** según el brief del proyecto. |

**Sitio corporativo de referencia de marca:** [cyelos.com](https://cyelos.com) (identidad, servicios generales de la empresa).

---

## 2. Identidad visual y UX

| Elemento | Valor / notas |
|----------|----------------|
| **Primario (CTA / acentos)** | `#E84848` |
| **Texto principal** | `#404040` |
| **Fondo** | `#FFFFFF` + superficies suaves `#F8FAFC` (`surface-muted` en CSS) |
| **Bordes** | `#E5E7EB` (`border`) |
| **Footer oscuro** | `#111111` (alto contraste para legal y contacto) |
| **Tipografía** | **Inter** (`next/font/google` en `src/app/layout.tsx`). Si en el futuro se confirma otra fuente del sitio WordPress de cyelos.com, sustituir el `import` de fuente en el layout. |
| **Logo** | `public/images/cyelosLogo.png` — usado en `Navbar` y `Footer`. |
| **Favicon** | `src/app/icon.png` — descargado desde el mismo recurso que sirve [cyelos.com](https://cyelos.com) (`/favicon.ico` redirige a `cropped-LogoCodeImagen-32x32.png`). Declarado en `metadata.icons` en `src/app/layout.tsx` (ruta pública `/icon.png`). |
| **WhatsApp (footer)** | Enlace con ícono SVG (`src/components/icons/WhatsAppIcon.tsx`), color verde marca `#25D366`, alineado al texto. |
| **Hero (imagen)** | Foto remota vía **Unsplash** (`next/image`); dominio permitido en `next.config.ts`. |

Los tokens Tailwind v4 están definidos en `src/app/globals.css` (`@theme inline` + variables `:root`).

---

## 3. Stack técnico

| Tecnología | Uso |
|------------|-----|
| **Next.js 16** | App Router, `src/app/` |
| **React 19** | UI |
| **TypeScript** | Tipado |
| **Tailwind CSS 4** | Estilos (`@import "tailwindcss"` en `globals.css`) |
| **Lucide React** | Iconos |
| **Framer Motion** | Animaciones suaves en secciones cliente |

**Scripts:** `npm run dev` · `npm run build` · `npm run start` · `npm run lint`

---

## 4. Estructura de carpetas (relevante)

```
cyelosos/
├── public/
│   └── images/
│       └── cyelosLogo.png      # Logo Cyelos
├── src/
│   ├── app/
│   │   ├── icon.png            # Favicon (misma imagen que cyelos.com vía favicon)
│   │   ├── layout.tsx          # Metadata SEO, Inter, JSON-LD, suppressHydrationWarning, icons
│   │   ├── page.tsx            # Orden de secciones de la home
│   │   └── globals.css         # Tema Tailwind + variables de marca
│   └── components/             # Secciones y piezas (mayoría "use client")
├── docs/                       # Markdown de contexto (ver §10)
├── .env.example                # NEXT_PUBLIC_SITE_URL
└── next.config.ts              # images.remotePatterns (Unsplash)
```

**Alias de imports:** `@/*` → `src/*` (ver `tsconfig.json`).

---

## 5. Página principal: secciones y anclas

Orden en `src/app/page.tsx` y componente asociado:

| # | Sección | Componente | ID / ancla |
|---|---------|------------|------------|
| — | Barra superior | `Navbar.tsx` | Enlaces internos (ver tabla siguiente) |
| 1 | Hero | `Hero.tsx` | CTAs → `#cuestionario`, `#la-solucion-cyelos` |
| 2 | El problema | `ElProblema.tsx` | `#el-problema` |
| 3 | La solución CyelOS | `LaSolucionCyelos.tsx` | `#la-solucion-cyelos` |
| 4 | Referencias ciberseguridad | `ReferenciasCiberseguridadPymes.tsx` | `#referencias-ciberseguridad-pymes` |
| 5 | Planes / opciones | `OpcionesPlanes.tsx` | `#planes` |
| 6 | ROI (tabla COP) | `ROITabla.tsx` | `#roi` |
| 7 | Soporte inteligente | `SoporteInteligente.tsx` | `#soporte-inteligente` |
| 8 | Cuestionario lead gen | `LeadGenCuestionario.tsx` | `#cuestionario` |
| 9 | Pie | `Footer.tsx` | (contacto; sin ancla obligatoria) |

**Navbar (desktop):** logo izquierda · centro: **El Problema** · **La Solución CyelOS** · **Soporte Inteligente** · **Planes** · derecha: **Evalúa tu Empresa** → `#cuestionario`.

En la tarjeta **“Seguridad inquebrantable”** (`LaSolucionCyelos.tsx`) hay un enlace a `#referencias-ciberseguridad-pymes`.

---

## 6. Contenido destacado para continuidad

### 6.1 Tabla ROI (`ROITabla.tsx`)

Cifras ilustrativas del brief (COP por PC): Windows 11 Pro, Office + antivirus; **total ahorro directo** destacado (p. ej. **$1.350.000 COP por PC**). Ajustar solo con criterio comercial y consistencia legal.

### 6.2 Referencias externas (`ReferenciasCiberseguridadPymes.tsx`)

Tres artículos (medios independientes) que contextualizan **riesgo para pymes en Colombia** y refuerzan el mensaje de seguridad de CyelOS. Los enlaces están en el componente; al cambiar URLs, mantener `rel="noopener noreferrer"` y `target="_blank"`.

### 6.3 Formulario / cuestionario (`LeadGenCuestionario.tsx`)

- **5 preguntas** (radios + número de puestos) + **nombre, empresa, teléfono WhatsApp, correo**.
- **Envío actual:** `console.info` en cliente + mensaje de éxito y campos `disabled` (stub). **Pendiente de integración:** API propia, Formspree, Resend, webhook, Google Sheets, CRM, etc.
- Al implementar backend, preservar accesibilidad (`aria-busy`, labels, `autocomplete`).

### 6.4 SEO y datos estructurados

- **`metadata`** en `layout.tsx`: título, descripción, Open Graph, Twitter, `metadataBase`, `lang="es-CO"`.
- **`JsonLdOrganization.tsx`:** JSON-LD `Organization` (NIT, dirección, teléfono, `sameAs`). El **logo absoluto** usa `NEXT_PUBLIC_SITE_URL` (ver env).
- **`suppressHydrationWarning`** en `<html>` y `<body>`: mitiga avisos de hidratación cuando **extensiones del navegador** inyectan atributos en el DOM raíz (p. ej. `cz-shortcut-listen` por ColorZilla). No oculta errores reales en componentes hijos.

### 6.5 Footer (`Footer.tsx`)

- Razón social, NIT, logo.
- Enlaces legales hacia **cyelos.com** (privacidad / tratamiento de datos Ley 1581).
- Contacto: ciudad, teléfono y WhatsApp (coherentes con datos públicos de Cyelos; actualizar si cambian).

---

## 7. Variables de entorno

| Variable | Propósito |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL pública del deploy (sin slash final en el código del JSON-LD). Usada en `JsonLdOrganization.tsx` para `url` y `logo`. |

Copiar `.env.example` → `.env.local` y en **Vercel** definir el mismo valor en **Environment Variables**.

---

## 8. Deploy (Vercel)

1. Conectar el repositorio a Vercel.
2. Framework: **Next.js** (detectado automáticamente).
3. Build: `npm run build`; salida estándar `.next`.
4. Configurar `NEXT_PUBLIC_SITE_URL` con el dominio final (p. ej. `https://tu-dominio.com`).

---

## 9. Decisiones y “gotchas” para IAs / devs

1. **No duplicar lógica de marca** sin revisar `docs/CONTEXTO_NEGOCIO.md` y el tono (financiero, no técnico OS).
2. **Imágenes remotas:** solo dominios declarados en `next.config.ts` (actualmente Unsplash para el hero).
3. **Componentes cliente:** la mayoría de secciones usan `"use client"` por Framer Motion y formularios; el `layout` y `page` pueden seguir siendo server components salvo que se requiera lo contrario.
4. **Hydration:** si aparece un mismatch en `<body>`, primero sospechar **extensiones**; el layout ya lleva `suppressHydrationWarning` en raíz.
5. **Advertencia Turbopack / lockfile:** si hay otro `package-lock.json` en un directorio padre, Next puede mostrar aviso de workspace root; unificar lockfiles o fijar `turbopack.root` en `next.config.ts` si molesta en CI.

---

## 10. Documentación adicional (`docs/`)

| Archivo | Contenido |
|---------|-----------|
| `README.md` | Índice corto de la carpeta `docs/` |
| `CONTEXTO_NEGOCIO.md` | Propuesta de valor, tono, oferta, datos legales |
| `DISEÑO_UX.md` | Paleta, tipografía, patrones UI, SEO |
| `ESTRUCTURA_LANDING.md` | Secciones, anclas, flujo de contenido |

**Convención:** al cambiar el mensaje de negocio o el orden de bloques, actualizar **este README** y el `.md` correspondiente en `docs/` para que el contexto no se pierda.

---

## 11. Frase de cierre de marca

> Tecnología eficiente para empresas inteligentes.

---

*Última actualización del README: alineado con la landing orientada a logros, referencias de ciberseguridad, tabla ROI, cuestionario de leads y SEO/JSON-LD.*
