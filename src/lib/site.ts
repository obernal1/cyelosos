/**
 * URL canónica del deploy (sin slash final). Por defecto: subdominio de la landing CyelOS.
 * En Vercel, definir NEXT_PUBLIC_SITE_URL = https://os.cyelos.com (o el dominio final).
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://os.cyelos.com"
  );
}
