import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import LegalDocument from "@/components/organisms/legal/LegalDocument/LegalDocument";
import { TERMS_AND_CONDITIONS } from "@/data/legal/termsAndConditions";

const TERMS_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function TermsPage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={TERMS_BREADCRUMBS}
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or engaging our services."
        path="/terms-and-conditions"
      />
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
