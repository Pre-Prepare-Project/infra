import CareersPage from "@/components/templates/CareersPage/CareersPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at InfraPulse — open roles in engineering, design, DevOps, QA, and business development.",
  path: "/careers",
});

export default function Page() {
  return <CareersPage />;
}
