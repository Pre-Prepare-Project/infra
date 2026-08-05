import { COMPANY } from "@/constants/theme";
import { NOINDEX_ROUTES, getOgImageUrl } from "@/lib/seo";

export const defaultMetadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.shortName} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "InfraPulse",
    "software development",
    "web development",
    "mobile app development",
    "ERP development",
    "CRM development",
    "cloud DevOps",
    "UI UX design",
    "OZii ERP",
    "BillFlow 360",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY.url,
    siteName: COMPANY.shortName,
    title: `${COMPANY.shortName} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [
      {
        url: getOgImageUrl("/android-chrome-512x512.png"),
        width: 512,
        height: 512,
        alt: `${COMPANY.shortName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.shortName} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [getOgImageUrl("/android-chrome-512x512.png")],
  },
  alternates: {
    canonical: COMPANY.url,
  },
  verification: {
    google: "8VaFZHc0lQoIaBqP09nT5OY1_kxHGnasoZuKSf5N_OU",
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
  noindex = false,
  openGraphType = "website",
}) {
  const url = `${COMPANY.url}${path}`;
  const ogImage = getOgImageUrl("/android-chrome-512x512.png");
  const pageTitle = `${title} | ${COMPANY.shortName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: openGraphType,
      locale: "en_IN",
      url,
      siteName: COMPANY.shortName,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: `${title} — ${COMPANY.shortName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
    ...(noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function createNoIndexMetadata({ title, description }) {
  return createPageMetadata({
    title,
    description,
    noindex: true,
  });
}
