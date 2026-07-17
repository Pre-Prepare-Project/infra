import PageHero from "@/components/molecules/PageHero/PageHero";
import LegalDocument from "@/components/organisms/legal/LegalDocument/LegalDocument";
import { PRIVACY_POLICY } from "@/data/legal/privacyPolicy";

const PRIVACY_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Learn how InfraPulse collects, uses, and protects your personal information."
        breadcrumbs={PRIVACY_BREADCRUMBS}
      />
      <LegalDocument
        lastUpdated={PRIVACY_POLICY.lastUpdated}
        introduction={PRIVACY_POLICY.introduction}
        sections={PRIVACY_POLICY.sections}
      />
    </>
  );
}
