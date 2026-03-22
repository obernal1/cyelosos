# Cyelos · CyelOS – Landing (orientación a logros)

Landing **consultiva y financiera** para **Cyelos Soluciones de Software**: puestos de trabajo con **CyelOS**, ahorro en licencias, seguridad operativa y soporte transparente. Deploy en **Vercel**.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Lucide React** · **Framer Motion**
- **TypeScript**

## Variables de entorno

Copia `.env.example` a `.env.local` y define la URL pública del sitio (útil para JSON-LD y enlaces absolutos):

```bash
cp .env.example .env.local
# Edita NEXT_PUBLIC_SITE_URL
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Documentación (`docs/`)

| Archivo | Contenido |
|--------|-----------|
| **CONTEXTO_NEGOCIO.md** | Propuesta de valor, tono, oferta, datos legales |
| **DISEÑO_UX.md** | Paleta cyelos.com, tipografía, patrones, SEO |
| **ESTRUCTURA_LANDING.md** | Secciones, anclas, copy base |

## Estructura actual de la página

1. **Navbar** – Logo · El Problema · La Solución CyelOS · Soporte Inteligente · Planes · **Evalúa tu Empresa** (`#cuestionario`)
2. **Hero** – Gancho principal + imagen oficina + CTAs
3. **El problema** – Dolor financiero (3 tarjetas)
4. **La solución CyelOS** – Propuesta y beneficios
5. **Planes** – Renovación total vs remanufacturación
6. **ROI** – Tabla de ahorro por PC
7. **Soporte** – Bolsa de horas / reglas
8. **Cuestionario** – 5 preguntas + datos de contacto
9. **Footer** – Logo, NIT, legal (Ley 1581), contacto Floridablanca

---

Tecnología eficiente para empresas inteligentes.
