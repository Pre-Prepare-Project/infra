import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import CaseStudyDetailContent from "@/components/organisms/caseStudies/CaseStudyDetailContent/CaseStudyDetailContent";
import RelatedCaseStudies from "@/components/organisms/caseStudies/RelatedCaseStudies/RelatedCaseStudies";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

export default function CaseStudyDetailPage({ study }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.title, href: study.href },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={breadcrumbs}
        title={study.title}
        description={study.description}
        path={study.href}
      />
      <PageHero
        title={study.title}
        subtitle={study.description}
        breadcrumbs={breadcrumbs}
      />
      <CaseStudyDetailContent study={study} />
      <RelatedCaseStudies currentSlug={study.slug} />
      <CTA
        title="Want Results Like These?"
        subtitle="Share your goals with us and we'll help you build a roadmap to success."
        variant="dark"
        primaryAction={{ label: "Start a Conversation", href: "/contact" }}
        secondaryAction={{ label: "View All Case Studies", href: "/case-studies", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
