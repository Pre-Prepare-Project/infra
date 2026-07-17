import AboutPage from "@/components/templates/AboutPage/AboutPage";
import { createPageMetadata } from "@/lib/metadata";
import { COMPANY } from "@/constants/theme";

export const metadata = createPageMetadata({
  title: "About Us",
  description: `Learn about ${COMPANY.name} — our mission, vision, values, journey, and the team behind our innovative software solutions.`,
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
