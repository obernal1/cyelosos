# Cyelos · CyelOS — Landing web

Repositorio de la **landing page** de **Cyelos Soluciones de Software S.A.S.** orientada a **resultados financieros y operativos**: ahorro en presupuesto TI, puestos de trabajo con **CyelOS**, seguridad frente a amenazas habituales en pymes, soporte por bolsa de horas y **lead generation** mediante cuestionario. Desplegable en **Vercel** (Next.js App Router).

Este documento resume **contexto de negocio, dominio/SEO, diseño, arquitectura técnica y convenciones** para que cualquier persona (o IA) pueda **continuar el proyecto** sin perder el hilo.

---

## 0. Resumen rápido para una IA que retoma el repo

| Qué | Dónde |
|-----|--------|
| **Dominio de producción (canónico SEO)** | `https://os.cyelos.com` — variable `NEXT_PUBLIC_SITE_URL` en Vercel y `.env.local`. |
| **URL base del sitio en código** | `src/lib/site.ts` → `getSiteUrl()` (fallback `https://os.cyelos.com`). |
| **Metadatos globales (OG, Twitter, canonical)** | `src/app/layout.tsx`. |
| **JSON-LD** | `src/components/JsonLdOrganization.tsx` (`Organization` + `WebSite` en `@graph`). |
| **Sitemap / robots** | `src/app/sitemap.ts`, `src/app/robots.ts` (rutas `/sitemap.xml`, `/robots.txt`). |
| **Home y orden de secciones** | `src/app/page.tsx`. |
| **Formulario de leads** | `src/components/LeadGenCuestionario.tsx` → `POST /api/diagnostico`. |
| **API de correo** | `src/app/api/diagnostico/route.ts` (Nodemailer + SMTP). |
| **Marca corporativa general** | Sitio principal [cyelos.com](https://cyelos.com) (esta landing es el subdominio **os.**). |

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

**Sitio corporativo de referencia de marca:** [cyelos.com](https://cyelos.com). La **landing CyelOS** vive en **os.cyelos.com** (SEO y metadatos apuntan ahí como URL canónica).

---

## 2. Dominio, SEO y datos estructurados

| Elemento | Comportamiento |
|----------|----------------|
| **URL canónica** | `NEXT_PUBLIC_SITE_URL` sin slash final; por defecto en código `https://os.cyelos.com`. |
| **metadataBase, Open Graph `url`** | Derivados de `getSiteUrl()` en `layout.tsx` para que enlaces y previews usen el dominio real del deploy. |
| **`alternates.canonical`** | `/` relativo a `metadataBase` (home indexable). |
| **`robots` (metadata)** | `index: true`, `follow: true` para la home. |
| **`/sitemap.xml`** | Generado por `src/app/sitemap.ts` (entrada principal). |
| **`/robots.txt`** | `Allow: /` y directiva `Sitemap` hacia `{SITE_URL}/sitemap.xml`. |
| **JSON-LD** | `@graph` con `Organization` (`@id` …`/#organization`) y `WebSite` (`@id` …`/#website`, `publisher` → organización). Logo y `url` usan la misma base que el sitio. |

**Checklist post-deploy:** en Vercel, asignar dominio personalizado **os.cyelos.com** y fijar `NEXT_PUBLIC_SITE_URL=https://os.cyelos.com`. Tras el primer indexado, validar en [Google Search Console](https://search.google.com/search-console) (sitemap, cobertura). Las imágenes OG usan rutas relativas bajo `metadataBase`; no hace falta duplicar dominio en `openGraph.images`.

---

## 3. Identidad visual y UX

| Elemento | Valor / notas |
|----------|----------------|
| **Primario (CTA / acentos)** | `#E84848` |
| **Texto principal** | `#404040` |
| **Fondo** | `#FFFFFF` + superficies suaves `#F8FAFC` (`surface-muted` en CSS) |
| **Bordes** | `#E5E7EB` (`border`) |
| **Footer oscuro** | `#111111` (alto contraste para legal y contacto) |
| **Tipografía** | **Inter** (`next/font/google` en `src/app/layout.tsx`). Si en el futuro se confirma otra fuente del sitio WordPress de cyelos.com, sustituir el `import` de fuente en el layout. |
| **Logo** | `public/images/cyelosLogo.png` — usado en `Navbar` y `Footer`. |
| **Favicon** | `src/app/icon.png` — alineado al recurso que sirve cyelos.com. Declarado en `metadata.icons` en `layout` (ruta pública `/icon.png`). |
| **WhatsApp (footer)** | `src/components/icons/WhatsAppIcon.tsx`, color `#25D366`. |
| **Hero (imagen)** | Unsplash vía `next/image`; dominio en `next.config.ts` (`images.remotePatterns`). |

Los tokens Tailwind v4 están en `src/app/globals.css` (`@theme inline` + variables `:root`).

---

## 4. Stack técnico

| Tecnología | Uso |
|------------|-----|
| **Next.js 16** | App Router, `src/app/` |
| **React 19** | UI |
| **TypeScript** | Tipado |
| **Tailwind CSS 4** | Estilos (`@import "tailwindcss"` en `globals.css`) |
| **Lucide React** | Iconos |
| **Framer Motion** | Animaciones en secciones cliente |
| **Nodemailer** | Envío de correo en `api/diagnostico` |

**Scripts:** `npm run dev` · `npm run build` · `npm run start` · `npm run lint`

---

## 5. Estructura de carpetas (relevante)

```
cyelosos/
├── public/
│   └── images/
│       └── cyelosLogo.png
├── src/
│   ├── app/
│   │   ├── api/diagnostico/route.ts   # POST: cuestionario → SMTP
│   │   ├── icon.png
│   │   ├── layout.tsx                 # Metadata SEO, Inter, JSON-LD, icons
│   │   ├── page.tsx                   # Orden de secciones de la home
│   │   ├── globals.css
│   │   ├── robots.ts                  # /robots.txt
│   │   └── sitemap.ts                 # /sitemap.xml
│   ├── components/                  # Secciones (muchas "use client")
│   ├── lib/
│   │   └── site.ts                    # getSiteUrl() — base canónica
│   └── ...
├── docs/                             # Contexto adicional de negocio/UX
├── .env.example                      # NEXT_PUBLIC_SITE_URL + SMTP
└── next.config.ts                    # images.remotePatterns (Unsplash)
```

**Alias:** `@/*` → `src/*` (`tsconfig.json`).

---

## 6. Página principal: secciones y anclas

Orden en `src/app/page.tsx`:

| # | Sección | Componente | ID / ancla |
|---|---------|------------|------------|
| — | Barra superior | `Navbar.tsx` | Enlaces internos |
| 1 | Hero | `Hero.tsx` | CTAs → `#cuestionario`, `#la-solucion-cyelos` |
| 2 | El problema | `ElProblema.tsx` | `#el-problema` |
| 3 | La solución CyelOS | `LaSolucionCyelos.tsx` | `#la-solucion-cyelos` |
| 4 | Referencias ciberseguridad | `ReferenciasCiberseguridadPymes.tsx` | `#referencias-ciberseguridad-pymes` |
| 5 | Planes / opciones | `OpcionesPlanes.tsx` | `#planes` |
| 6 | ROI (tabla COP) | `ROITabla.tsx` | `#roi` |
| 7 | Soporte inteligente | `SoporteInteligente.tsx` | `#soporte-inteligente` |
| 8 | Cuestionario lead gen | `LeadGenCuestionario.tsx` | `#cuestionario` |
| 9 | Pie | `Footer.tsx` | — |

**Navbar (desktop):** logo · **El Problema** · **La Solución CyelOS** · **Soporte Inteligente** · **Planes** · **Evalúa tu Empresa** → `#cuestionario`.

---

## 7. Contenido y rutas destacadas

### 7.1 Tabla ROI (`ROITabla.tsx`)

Cifras ilustrativas del brief (COP por PC). Ajustar solo con criterio comercial y coherencia legal.

### 7.2 Referencias (`ReferenciasCiberseguridadPymes.tsx`)

Enlaces externos con `rel="noopener noreferrer"` y `target="_blank"`.

### 7.3 Cuestionario y API de diagnóstico

- **Cliente:** `LeadGenCuestionario.tsx` envía `POST /api/diagnostico` con JSON (`q1`–`q4`, `q5`, `nombre`, `empresa`, `correo`, `telefono`).
- **Servidor:** `src/app/api/diagnostico/route.ts` valida campos y correo, y usa **Nodemailer** con variables `SMTP_*` (ver §8). Destinatarios internos definidos en la ruta; asunto y cuerpo incluyen las respuestas del cuestionario.
- Si falta configuración SMTP, la API responde 500 con mensaje genérico; el cliente muestra error amigable y mantiene accesibilidad (`aria-busy`, etc.).

### 7.4 Hidratación

`suppressHydrationWarning` en `<html>` y `<body>` mitiga avisos por extensiones del navegador que inyectan atributos en el DOM raíz. No sustituye depurar errores reales en componentes hijos.

---

## 8. Variables de entorno

| Variable | Propósito |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (sin slash final): metadata, JSON-LD, sitemap y `robots.txt`. En producción: `https://os.cyelos.com`. |
| `SMTP_HOST` | Servidor SMTP |
| `SMTP_PORT` | Puerto (p. ej. 465) |
| `SMTP_USER` | Usuario SMTP |
| `SMTP_PASS` | Contraseña SMTP |
| `SMTP_FROM` | Remitente del correo (p. ej. `"Cyelos <webmaster@cyelos.com>"`) |

Copiar `.env.example` → `.env.local` para desarrollo local. En **Vercel**, definir las mismas claves en **Environment Variables** (especialmente `NEXT_PUBLIC_SITE_URL` y SMTP en producción).

---

## 9. Deploy (Vercel)

1. Conectar el repositorio a Vercel.
2. Framework: **Next.js** (detectado automáticamente).
3. Build: `npm run build`.
4. Añadir dominio **os.cyelos.com** y configurar DNS según Vercel.
5. Establecer `NEXT_PUBLIC_SITE_URL=https://os.cyelos.com` y variables SMTP para el formulario.

---

## 10. Decisiones y “gotchas”

1. **Tono de marca:** revisar `docs/CONTEXTO_NEGOCIO.md` antes de cambiar copy (enfoque financiero, no jerga OS).
2. **Imágenes remotas:** solo dominios en `next.config.ts` (p. ej. Unsplash en el hero).
3. **Componentes cliente:** la mayoría de secciones usan `"use client"` por Framer Motion y formularios.
4. **Lockfile / Turbopack:** si hay otro `package-lock.json` en un directorio padre, Next puede avisar del workspace root; unificar lockfiles o configurar `turbopack.root` en `next.config.ts` si molesta en CI (ver README histórico y documentación Next.js).

---

## 11. Documentación en `docs/`

| Archivo | Contenido |
|---------|-----------|
| `README.md` | Índice de la carpeta |
| `CONTEXTO_NEGOCIO.md` | Propuesta de valor, tono, oferta, datos legales |
| `DISEÑO_UX.md` | Paleta, tipografía, patrones UI, notas SEO |
| `ESTRUCTURA_LANDING.md` | Secciones, anclas, flujo |

Convención: al cambiar mensaje de negocio, orden de bloques o rutas públicas, actualizar **este README** y el `.md` correspondiente en `docs/`.

---

## 12. Frase de cierre de marca

> Tecnología eficiente para empresas inteligentes.

---

*Última actualización del README (marzo 2026): dominio canónico os.cyelos.com, SEO (sitemap, robots, canonical, JSON-LD Organization + WebSite), `src/lib/site.ts`, integración del cuestionario con `POST /api/diagnostico` y SMTP.*
