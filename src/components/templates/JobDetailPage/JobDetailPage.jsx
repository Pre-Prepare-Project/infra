import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import JobDetailContent from "@/components/organisms/careers/JobDetailContent/JobDetailContent";
import RelatedJobs from "@/components/organisms/careers/RelatedJobs/RelatedJobs";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

export default function JobDetailPage({ job }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: job.title, href: job.href },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={breadcrumbs}
        title={job.title}
        description={job.description}
        path={job.href}
      />
      <PageHero
        title={job.title}
        subtitle={job.description}
        breadcrumbs={breadcrumbs}
      />
      <JobDetailContent job={job} />
      <RelatedJobs currentSlug={job.slug} />
      <CTA
        title="Ready to Join InfraPulse?"
        subtitle="We're always looking for talented people. Apply today or explore other open roles."
        variant="dark"
        primaryAction={{ label: "View All Jobs", href: "/careers" }}
        secondaryAction={{ label: "About Our Culture", href: "/about" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
