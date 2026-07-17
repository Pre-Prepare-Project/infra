import { notFound } from "next/navigation";
import CaseStudyDetailPage from "@/components/templates/CaseStudyDetailPage/CaseStudyDetailPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/data/caseStudies";

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return createPageMetadata({
    title: study.title,
    description: study.description,
    path: study.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailPage study={study} />;
}
