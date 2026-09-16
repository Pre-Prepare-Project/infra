import JsonLd from "@/components/atoms/JsonLd/JsonLd";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/jsonLd";

export default function PageJsonLd({ breadcrumbs = [], title, description, path }) {
  const data = [
    ...(breadcrumbs.length > 0 ? [getBreadcrumbJsonLd(breadcrumbs)] : []),
    getWebPageJsonLd({ title, description, path }),
  ];

  return <JsonLd data={data} />;
}
