import HomePage from "@/components/templates/HomePage/HomePage";
import { defaultMetadata } from "@/lib/metadata";

export const metadata = {
  ...defaultMetadata,
  title: defaultMetadata.title.default,
  alternates: {
    canonical: defaultMetadata.alternates.canonical,
  },
};

export default function Page() {
  return <HomePage />;
}
