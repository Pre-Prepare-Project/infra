import PageHero from "@/components/molecules/PageHero/PageHero";
import PageJsonLd from "@/components/molecules/PageJsonLd/PageJsonLd";
import ProductDetailContent from "@/components/organisms/products/ProductDetailContent/ProductDetailContent";
import RelatedProducts from "@/components/organisms/products/RelatedProducts/RelatedProducts";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";

export default function ProductDetailPage({ product }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: product.href },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={breadcrumbs}
        title={product.title}
        description={product.description}
        path={product.href}
      />
      <PageHero
        title={product.title}
        subtitle={product.description}
        breadcrumbs={breadcrumbs}
      />
      <ProductDetailContent product={product} />
      <RelatedProducts currentSlug={product.slug} />
      <CTA
        title={`Ready to Explore ${product.title}?`}
        subtitle="Book a demo and discover how this platform can transform your business operations."
        variant="dark"
        primaryAction={{ label: "Request a Demo", href: "/contact" }}
        secondaryAction={{ label: "View All Products", href: "/products", variant: "light" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
