import { notFound } from "next/navigation";
import JobDetailPage from "@/components/templates/JobDetailPage/JobDetailPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAllJobSlugs, getJobBySlug } from "@/data/careers";

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return createPageMetadata({
    title: job.title,
    description: job.description,
    path: job.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}
