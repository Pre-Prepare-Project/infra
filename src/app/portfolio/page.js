import PortfolioPage from "@/components/templates/PortfolioPage/PortfolioPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore InfraPulse's portfolio of web, mobile, ERP, e-commerce, and UI/UX projects delivered for clients worldwide.",
  path: "/portfolio",
});

export default function Page() {
  return <PortfolioPage />;
}
