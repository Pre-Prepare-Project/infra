import PageHero from "@/components/molecules/PageHero/PageHero";
import CompanySection from "@/components/organisms/about/CompanySection/CompanySection";
import VisionMission from "@/components/organisms/about/VisionMission/VisionMission";
import ValuesSection from "@/components/organisms/about/ValuesSection/ValuesSection";
import TeamSection from "@/components/organisms/about/TeamSection/TeamSection";
import { Timeline, Statistics, CTA } from "@/components/organisms";
import { COMPANY_TIMELINE } from "@/data/company";
import { ABOUT_STATISTICS } from "@/data/statistics";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import { mapStatisticsForComponent } from "@/utils/data";
import styles from "./AboutPage.module.scss";

const ABOUT_STATS = mapStatisticsForComponent(ABOUT_STATISTICS);

const ABOUT_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About InfraPulse"
        subtitle="We are a team of innovators and problem solvers dedicated to building software that empowers businesses worldwide."
        breadcrumbs={ABOUT_BREADCRUMBS}
      />
      <CompanySection />
      <Statistics
        items={ABOUT_STATS}
        columns={4}
        className={styles.statsBand}
      />
      <VisionMission />
      <ValuesSection />
      {/* <Timeline
        items={COMPANY_TIMELINE}
        overline="Our Journey"
        title="The InfraPulse Story"
        subtitle="Key milestones in our growth from a startup to a trusted software partner."
        className={styles.timeline}
      /> */}
      <TeamSection />
      <CTA
        title="Ready to Work With Us?"
        subtitle="Let's discuss how InfraPulse can help transform your business with custom software solutions."
        variant="dark"
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
