import PageHero from "@/components/molecules/PageHero/PageHero";
import CareersBenefits from "@/components/organisms/careers/CareersBenefits/CareersBenefits";
import CareersGrid from "@/components/organisms/careers/CareersGrid/CareersGrid";
import ValuesSection from "@/components/organisms/about/ValuesSection/ValuesSection";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import styles from "./CareersPage.module.scss";

const CAREERS_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at InfraPulse"
        subtitle="Join a team of passionate engineers, designers, and innovators building software that empowers businesses worldwide."
        breadcrumbs={CAREERS_BREADCRUMBS}
      />
      <CareersBenefits className={styles.benefits} />
      <CareersGrid className={styles.grid} />
      <ValuesSection />
      <CTA
        title="Don't See the Right Role?"
        subtitle="Send us your resume and we'll reach out when a matching opportunity opens up."
        variant="dark"
        primaryAction={{ label: "Contact HR", href: "/contact" }}
        secondaryAction={{ label: "Learn About Us", href: "/about" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
