import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import ServiceDetailContent from "@/components/organisms/services/ServiceDetailContent/ServiceDetailContent";
import RelatedServices from "@/components/organisms/services/RelatedServices/RelatedServices";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

export default function ServiceDetailPage({ service }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: service.href },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={breadcrumbs}
        title={service.title}
        description={service.description}
        path={service.href}
      />
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumbs={breadcrumbs}
      />
      <ServiceDetailContent service={service} />
      <RelatedServices currentSlug={service.slug} />
      <CTA
        title={`Ready to Start Your ${service.title} Project?`}
        subtitle="Let's discuss your requirements and create a tailored plan for success."
        variant="dark"
        primaryAction={{ label: "Request a Quote", href: "/contact" }}
        secondaryAction={{ label: "View All Services", href: "/services", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
