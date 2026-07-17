import TermsPage from "@/components/templates/TermsPage/TermsPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read InfraPulse Technologies' Terms & Conditions governing use of our website and software development services.",
  path: "/terms-and-conditions",
});

export default function Page() {
  return <TermsPage />;
}
