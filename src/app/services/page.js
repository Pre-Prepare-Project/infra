import ServicesPage from "@/components/templates/ServicesPage/ServicesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore InfraPulse's full range of software development services — web, mobile, ERP, CRM, UI/UX, API, cloud, and dedicated support.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
