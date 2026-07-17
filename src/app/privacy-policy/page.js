import PrivacyPolicyPage from "@/components/templates/PrivacyPolicyPage/PrivacyPolicyPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read InfraPulse Technologies' Privacy Policy to understand how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function Page() {
  return <PrivacyPolicyPage />;
}
