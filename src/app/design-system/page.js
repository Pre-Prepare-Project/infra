import { COMPANY } from "@/constants/theme";
import DesignSystemShowcase from "@/components/templates/DesignSystemShowcase/DesignSystemShowcase";
import { createNoIndexMetadata } from "@/lib/metadata";

export const metadata = createNoIndexMetadata({
  title: "Design System",
  description: `Internal design system showcase for ${COMPANY.shortName}.`,
});

export default function DesignSystemPage() {
  return <DesignSystemShowcase companyName={COMPANY.shortName} />;
}
