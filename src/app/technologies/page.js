import TechnologiesPage from "@/components/templates/TechnologiesPage/TechnologiesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technologies",
  description:
    "Explore the modern tech stack InfraPulse uses — React, Next.js, Node.js, Flutter, AWS, Azure, PostgreSQL, Docker, and more.",
  path: "/technologies",
});

export default function Page() {
  return <TechnologiesPage />;
}
