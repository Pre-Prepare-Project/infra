import { notFound } from "next/navigation";
import PortfolioDetailPage from "@/components/templates/PortfolioDetailPage/PortfolioDetailPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAllPortfolioSlugs, getPortfolioBySlug } from "@/data/portfolio";

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: project.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailPage project={project} />;
}
