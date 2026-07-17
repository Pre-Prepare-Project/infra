import NotFoundPage from "@/components/templates/NotFoundPage/NotFoundPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found on InfraPulse Technologies.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage />;
}
