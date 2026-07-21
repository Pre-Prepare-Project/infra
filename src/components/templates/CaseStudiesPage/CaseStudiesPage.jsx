import PageHero from "@/components/molecules/PageHero/PageHero";
import CaseStudiesGrid from "@/components/organisms/caseStudies/CaseStudiesGrid/CaseStudiesGrid";
import { Testimonials, CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import styles from "./CaseStudiesPage.module.scss";

const CASE_STUDIES_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real stories of how InfraPulse partners with clients to solve complex challenges and deliver measurable business outcomes."
        breadcrumbs={CASE_STUDIES_BREADCRUMBS}
      />
      <CaseStudiesGrid className={styles.grid} />
      <Testimonials count={3} />
      <CTA
        title="Ready to Write Your Success Story?"
        subtitle="Let's discuss your project and explore how we can help you achieve similar results."
        variant="dark"
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
