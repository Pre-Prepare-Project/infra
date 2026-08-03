import HomePageV2 from "@/components/templates/HomePageV2/HomePageV2";
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
  return <HomePageV2 />;
}
