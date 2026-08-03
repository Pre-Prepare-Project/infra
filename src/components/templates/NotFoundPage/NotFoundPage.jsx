import PageHero from "@/components/molecules/PageHero/PageHero";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

const NOT_FOUND_BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Page Not Found", href: "#" }];

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        title="404 — Page Not Found"
        subtitle="The page you're looking for doesn't exist or may have been moved."
        breadcrumbs={NOT_FOUND_BREADCRUMBS}
      />
      <CTA
        title="Let's Get You Back on Track"
        subtitle="Explore our services, projects, or contact us — we're here to help."
        variant="dark"
        primaryAction={{ label: "Go to Homepage", href: "/" }}
        secondaryAction={{ label: "Contact Us", href: "/contact", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
