import PageHero from "@/components/molecules/PageHero/PageHero";
import LegalDocument from "@/components/organisms/legal/LegalDocument/LegalDocument";
import { TERMS_AND_CONDITIONS } from "@/data/legal/termsAndConditions";

const TERMS_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or engaging our services."
        breadcrumbs={TERMS_BREADCRUMBS}
      />
      <LegalDocument
        lastUpdated={TERMS_AND_CONDITIONS.lastUpdated}
        introduction={TERMS_AND_CONDITIONS.introduction}
        sections={TERMS_AND_CONDITIONS.sections}
      />
    </>
  );
}
