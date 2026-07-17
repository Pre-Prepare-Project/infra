import { COMPANY } from "@/constants/theme";
import { NOINDEX_ROUTES } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: NOINDEX_ROUTES,
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
    host: COMPANY.url,
  };
}
