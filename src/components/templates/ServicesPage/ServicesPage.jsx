import PageHero from "@/components/molecules/PageHero/PageHero";
import ServicesGrid from "@/components/organisms/services/ServicesGrid/ServicesGrid";
import WhyChooseUs from "@/components/organisms/home/WhyChooseUs/WhyChooseUs";
import ProcessSection from "@/components/organisms/home/ProcessSection/ProcessSection";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import styles from "./ServicesPage.module.scss";

const SERVICES_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end software development services designed to help your business grow, scale, and succeed in the digital landscape."
        breadcrumbs={SERVICES_BREADCRUMBS}
      />
      <ServicesGrid className={styles.grid} />
      <WhyChooseUs />
      <ProcessSection />
      <CTA
        title="Need a Custom Solution?"
        subtitle="Tell us about your project and we'll recommend the right service mix for your goals."
        variant="dark"
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
