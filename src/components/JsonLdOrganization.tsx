import { getSiteUrl } from "@/lib/site";

export function JsonLdOrganization() {
  const siteUrl = getSiteUrl();
  const orgId = `${siteUrl}/#organization`;
  const webId = `${siteUrl}/#website`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Cyelos Soluciones de Software S.A.S.",
        legalName: "Cyelos Soluciones de Software S.A.S.",
        url: siteUrl,
        logo: `${siteUrl}/images/cyelosLogo.png`,
        taxID: "901619792-1",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Floridablanca",
          addressRegion: "Santander",
          addressCountry: "CO",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+57-304-5778139",
          contactType: "sales",
          areaServed: "CO",
          availableLanguage: "Spanish",
        },
        sameAs: [
          "https://www.linkedin.com/in/ojbernal/",
          "https://www.instagram.com/cyelossolucionesdesoftware/",
          "https://www.facebook.com/cyelossolucionessoftware",
        ],
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: siteUrl,
        name: "Cyelos · CyelOS",
        inLanguage: "es-CO",
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
