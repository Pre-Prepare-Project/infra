import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/templates/ProductDetailPage/ProductDetailPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAllProductSlugs, getProductBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return createPageMetadata({
    title: product.title,
    description: product.description,
    path: product.href,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
