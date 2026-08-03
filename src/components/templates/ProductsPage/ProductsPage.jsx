import PageHero from "@/components/molecules/PageHero/PageHero";
import ProductsGrid from "@/components/organisms/products/ProductsGrid/ProductsGrid";
import WhyChooseUs from "@/components/organisms/home/WhyChooseUs/WhyChooseUs";
import { CTA } from "@/components/organisms";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import styles from "./ProductsPage.module.scss";

const PRODUCTS_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Ready-to-deploy software platforms built by InfraPulse to solve real business challenges across industries."
        breadcrumbs={PRODUCTS_BREADCRUMBS}
      />
      <ProductsGrid className={styles.grid} />
      <WhyChooseUs />
      <CTA
        title="Interested in a Project Demo?"
        subtitle="Schedule a walkthrough and see how our platforms can streamline your operations."
        variant="dark"
        primaryAction={{ label: "Request a Demo", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services" }}
        contactInfo={getDefaultContactInfo()}
      />
    </>
  );
}
