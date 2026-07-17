import ContactPage from "@/components/templates/ContactPage/ContactPage";
import { createPageMetadata } from "@/lib/metadata";
import { COMPANY } from "@/constants/theme";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.shortName} — request a quote, book a demo, or ask about our software development services.`,
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
