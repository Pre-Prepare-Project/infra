import ReusableComponentsShowcase from "@/components/templates/ReusableComponentsShowcase/ReusableComponentsShowcase";
import { createNoIndexMetadata } from "@/lib/metadata";

export const metadata = createNoIndexMetadata({
  title: "Reusable Components",
  description: "Internal component showcase for InfraPulse development.",
});

export default function ShowcasePage() {
  return <ReusableComponentsShowcase />;
}
