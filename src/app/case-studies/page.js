import CaseStudiesPage from "@/components/templates/CaseStudiesPage/CaseStudiesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "Read InfraPulse client case studies — enterprise ERP, healthcare, retail, SaaS, FinTech, and food delivery success stories.",
  path: "/case-studies",
});

export default function Page() {
  return <CaseStudiesPage />;
}
