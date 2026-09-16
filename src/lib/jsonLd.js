import { COMPANY } from "@/constants/theme";
import { CONTACT_INFO } from "@/data/contact";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { OG_IMAGE, getOgImageUrl } from "@/lib/seo";

function toAbsoluteUrl(path = "/") {
  if (!path || path === "/") {
    return COMPANY.url;
  }

  return `${COMPANY.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getOrganizationJsonLd() {
  const address = CONTACT_INFO.address;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: COMPANY.url,
    logo: {
      "@type": "ImageObject",
      url: getOgImageUrl("/logo.png"),
      width: 512,
      height: 512,
    },
    description: COMPANY.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line2,
      addressLocality: "East Delhi",
      addressRegion: "Delhi",
      postalCode: "110091",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.url}/#website`,
    name: COMPANY.shortName,
    url: COMPANY.url,
    description: COMPANY.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${COMPANY.url}/#organization`,
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${COMPANY.url}/#service`,
    name: COMPANY.name,
    url: COMPANY.url,
    image: getOgImageUrl(OG_IMAGE.path),
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    parentOrganization: {
      "@id": `${COMPANY.url}/#organization`,
    },
    serviceType: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "ERP Development",
      "Cloud DevOps",
    ],
  };
}

export function getDefaultJsonLd() {
  return [getOrganizationJsonLd(), getWebSiteJsonLd(), getProfessionalServiceJsonLd()];
}

export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href),
    })),
  };
}

export function getWebPageJsonLd({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: toAbsoluteUrl(path),
    image: getOgImageUrl(OG_IMAGE.path),
    isPartOf: {
      "@id": `${COMPANY.url}/#website`,
      "@type": "WebSite",
      name: COMPANY.shortName,
      url: COMPANY.url,
    },
    publisher: {
      "@id": `${COMPANY.url}/#organization`,
      "@type": "Organization",
      name: COMPANY.name,
    },
  };
}
