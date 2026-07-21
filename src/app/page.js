import HomePage from "@/components/templates/HomePage/HomePage";
import { COMPANY } from "@/constants/theme";
import { defaultMetadata } from "@/lib/metadata";

export const metadata = {
  ...defaultMetadata,
  title: {
    absolute: `${COMPANY.shortName} | ${COMPANY.tagline}`,
  },
  description: COMPANY.description,
  alternates: {
    canonical: COMPANY.url,
  },
};

export default function Page() {
  return <HomePage />;
}
