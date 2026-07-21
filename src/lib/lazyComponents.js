import dynamic from "next/dynamic";

export const LazyHomeHero = dynamic(() => import("@/components/templates/HomeHero/HomeHero"));
export const LazyHomeHeroV2 = dynamic(() => import("@/components/templates/HomeHeroV2/HomeHeroV2"));
export const LazyAboutPreview = dynamic(
  () => import("@/components/organisms/home/AboutPreview/AboutPreview"),
);
export const LazyHomeServices = dynamic(
  () => import("@/components/organisms/home/HomeServices/HomeServices"),
);
export const LazyHomeProducts = dynamic(
  () => import("@/components/organisms/home/HomeProducts/HomeProducts"),
);
export const LazyProcessSection = dynamic(
  () => import("@/components/organisms/home/ProcessSection/ProcessSection"),
);
export const LazyTechnologiesPreview = dynamic(
  () => import("@/components/organisms/home/TechnologiesPreview/TechnologiesPreview"),
);
export const LazyWhyChooseUs = dynamic(
  () => import("@/components/organisms/home/WhyChooseUs/WhyChooseUs"),
);
export const LazyHomeStatsBar = dynamic(
  () => import("@/components/organisms/home/HomeStatsBar/HomeStatsBar"),
);
export const LazyStatistics = dynamic(() => import("@/components/organisms/Statistics/Statistics"));
export const LazyTestimonials = dynamic(
  () => import("@/components/organisms/Testimonials/Testimonials"),
);
export const LazyFAQ = dynamic(() => import("@/components/organisms/FAQ/FAQ"));
export const LazyCTA = dynamic(() => import("@/components/organisms/CTA/CTA"));
