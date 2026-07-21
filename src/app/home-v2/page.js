import HomePageV2 from "@/components/templates/HomePageV2/HomePageV2";
import { COMPANY } from "@/constants/theme";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Building Software That Empowers Businesses",
  description: COMPANY.description,
  path: "/home-v2",
  noindex: true,
});

export default function Page() {
  return <HomePageV2 />;
}
