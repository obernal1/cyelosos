# Diseño y UX – CyelOS landing

## Identidad visual
- **Primario**: `#E84848` (CTA, acentos, iconos destacados).
- **Texto / tinta**: `#404040`.
- **Fondo**: `#FFFFFF` con secciones alternas en `#F8FAFC` (`surface-muted`).
- **Neutros de apoyo**: bordes `#E5E7EB`, footer oscuro `#111111` para contraste en legal/contacto.

## Tipografía
- **Inter** (Google Fonts) vía `next/font`: legible en móvil, estándar en sitios corporativos. Alineado al estilo limpio de cyelos.com (si en el futuro se confirma la fuente exacta del sitio WordPress, se puede sustituir el `import` en `layout.tsx`).

## Patrones de UI
- **Jerarquía**: un solo mensaje principal por sección; números y “ahorro” en rojo o verde según contexto.
- **CTA**: primario siempre rojo + texto blanco; secundario borde gris + hover rojo.
- **Tablas**: scroll horizontal en móvil (`overflow-x-auto`).
- **Formulario**: radios en cajas clicables; estados `disabled` tras envío exitoso.

## SEO / datos estructurados
- `metadata` en `layout.tsx` (título, descripción, Open Graph, Twitter).
- `lang="es-CO"`.
- JSON-LD `Organization` en `JsonLdOrganization.tsx` (NIT, dirección, teléfono). Logo absoluto usa `NEXT_PUBLIC_SITE_URL` (ver `.env.example`).

## Responsive
- Navbar: grid 3 columnas en desktop (logo | links | CTA); móvil con drawer.
- Hero: stack en móvil, dos columnas en desktop.
- Tabla ROI y formulario: probados en anchos pequeños con scroll y padding consistente.
