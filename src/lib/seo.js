import { COMPANY } from "@/constants/theme";
import { getAllServiceSlugs } from "@/data/services";
import { getAllProductSlugs } from "@/data/products";
import { getAllPortfolioSlugs } from "@/data/portfolio";
import { getAllCaseStudySlugs } from "@/data/caseStudies";
import { getAllJobSlugs } from "@/data/careers";

export const NOINDEX_ROUTES = ["/design-system", "/showcase", "/animations"];

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/technologies", priority: 0.7, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

function mapDynamicRoutes(slugs, basePath, priority = 0.7) {
  return slugs.map((slug) => ({
    path: `${basePath}/${slug}`,
    priority,
    changeFrequency: "monthly",
  }));
}

export function getSitemapEntries() {
  const routes = [
    ...STATIC_ROUTES,
    ...mapDynamicRoutes(getAllServiceSlugs(), "/services", 0.75),
    ...mapDynamicRoutes(getAllProductSlugs(), "/products", 0.75),
    ...mapDynamicRoutes(getAllPortfolioSlugs(), "/portfolio", 0.7),
    ...mapDynamicRoutes(getAllCaseStudySlugs(), "/case-studies", 0.7),
    ...mapDynamicRoutes(getAllJobSlugs(), "/careers", 0.65),
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${COMPANY.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

export function getOgImageUrl(path = "/android-chrome-512x512.png") {
  return `${COMPANY.url}${path}`;
}
