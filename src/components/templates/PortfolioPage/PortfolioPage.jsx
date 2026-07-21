import PageHero from "@/components/molecules/PageHero/PageHero";
import PortfolioGrid from "@/components/organisms/portfolio/PortfolioGrid/PortfolioGrid";
import { Statistics, CTA } from "@/components/organisms";
import { ABOUT_STATISTICS } from "@/data/statistics";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import { mapStatisticsForComponent } from "@/utils/data";
import styles from "./PortfolioPage.module.scss";

const PORTFOLIO_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
];

const PORTFOLIO_STATS = mapStatisticsForComponent(ABOUT_STATISTICS);

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="A showcase of successful software projects we've delivered for clients across industries."
        breadcrumbs={PORTFOLIO_BREADCRUMBS}
      />
      <PortfolioGrid className={styles.grid} />
      <Statistics items={PORTFOLIO_STATS} columns={4} className={styles.stats} />
      <CTA
        title="Have a Project in Mind?"
        subtitle="Let's discuss your requirements and build something exceptional together."
        variant="dark"
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
