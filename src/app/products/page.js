import ProductsPage from "@/components/templates/ProductsPage/ProductsPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Products",
  description:
    "Explore InfraPulse software products — OZii ERP, BillFlow 360, and Chaitanya Care Foundation platform.",
  path: "/products",
});

export default function Page() {
  return <ProductsPage />;
}
