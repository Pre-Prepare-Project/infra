import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import PortfolioDetailContent from "@/components/organisms/portfolio/PortfolioDetailContent/PortfolioDetailContent";
import RelatedPortfolio from "@/components/organisms/portfolio/RelatedPortfolio/RelatedPortfolio";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

export default function PortfolioDetailPage({ project }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.title, href: project.href },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={breadcrumbs}
        title={project.title}
        description={project.description}
        path={project.href}
      />
      <PageHero
        title={project.title}
        subtitle={project.description}
        breadcrumbs={breadcrumbs}
      />
      <PortfolioDetailContent project={project} />
      <RelatedPortfolio currentSlug={project.slug} />
      <CTA
        title="Inspired by This Project?"
        subtitle="Tell us about your goals and we'll help you achieve similar results."
        variant="dark"
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
        secondaryAction={{ label: "View All Projects", href: "/portfolio", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
