import AnimationsShowcase from "@/components/templates/AnimationsShowcase/AnimationsShowcase";
import { createNoIndexMetadata } from "@/lib/metadata";

export const metadata = createNoIndexMetadata({
  title: "Animations",
  description: "Internal animation showcase for InfraPulse development.",
});

export default function AnimationsPage() {
  return <AnimationsShowcase />;
}
