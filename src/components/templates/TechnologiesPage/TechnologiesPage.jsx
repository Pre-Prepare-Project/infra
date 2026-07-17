import PageHero from "@/components/molecules/PageHero/PageHero";
import FeaturedTechStack from "@/components/organisms/technologies/FeaturedTechStack/FeaturedTechStack";
import TechnologyCategories from "@/components/organisms/technologies/TechnologyCategories/TechnologyCategories";
import ProcessSection from "@/components/organisms/home/ProcessSection/ProcessSection";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import styles from "./TechnologiesPage.module.scss";

const TECHNOLOGIES_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Technologies", href: "/technologies" },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        title="Our Technologies"
        subtitle="We use industry-leading technologies to build scalable, secure, and high-performance software solutions."
        breadcrumbs={TECHNOLOGIES_BREADCRUMBS}
      />
      <FeaturedTechStack className={styles.featured} />
      <TechnologyCategories className={styles.categories} />
      <ProcessSection />
      <CTA
        title="Need a Solution Built With the Right Tech?"
        subtitle="Tell us about your project and we'll recommend the ideal technology stack for your goals."
        variant="dark"
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
