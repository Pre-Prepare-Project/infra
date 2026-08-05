import { COMPANY } from "@/constants/theme";
import { CONTACT_INFO } from "@/data/contact";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { getOgImageUrl } from "@/lib/seo";

export function getOrganizationJsonLd() {
  const address = CONTACT_INFO.address;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: COMPANY.url,
    logo: getOgImageUrl("/android-chrome-512x512.png"),
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
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.shortName,
    url: COMPANY.url,
    description: COMPANY.description,
    publisher: {
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
    name: COMPANY.name,
    url: COMPANY.url,
    image: getOgImageUrl("/android-chrome-512x512.png"),
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
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
      item: `${COMPANY.url}${item.href}`,
    })),
  };
}

export function getWebPageJsonLd({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${COMPANY.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: COMPANY.shortName,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
    },
  };
}
