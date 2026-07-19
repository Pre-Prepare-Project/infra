import HomePageV2 from "@/components/templates/HomePageV2/HomePageV2";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home Version 2 — Client Preview",
  description:
    "Preview the InfraPulse homepage Version 2 with orbit hero design for client approval.",
  path: "/home-v2",
  noindex: true,
});

export default function Page() {
  return <HomePageV2 />;
}
