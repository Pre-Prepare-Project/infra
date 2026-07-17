import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/templates/ServiceDetailPage/ServiceDetailPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: service.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
