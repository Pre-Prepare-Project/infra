import HomeHero from "@/components/templates/HomeHero/HomeHero";
import HomeStatsBar from "@/components/organisms/home/HomeStatsBar/HomeStatsBar";
import AboutPreview from "@/components/organisms/home/AboutPreview/AboutPreview";
import LazyLoad from "@/components/atoms/LazyLoad/LazyLoad";
import {
  LazyHomeServices,
  LazyHomeProducts,
  LazyProcessSection,
  LazyTechnologiesPreview,
  LazyWhyChooseUs,
  LazyTestimonials,
  LazyFAQ,
  LazyCTA,
} from "@/lib/lazyComponents";
import { FAQ_HOME } from "@/data";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import { mapFaqForComponent } from "@/utils/data";

const FAQ_DATA = mapFaqForComponent(FAQ_HOME);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatsBar />
      <LazyLoad minHeight={400}>
        <LazyHomeServices />
      </LazyLoad>
      <LazyLoad minHeight={400}>
        <LazyHomeProducts />
      </LazyLoad>
      <LazyLoad minHeight={240}>
        <LazyCTA
          title="Let's Build Something Amazing Together"
          subtitle="Ready to transform your business with custom software? Get a free consultation with our experts today."
          variant="dark"
          primaryAction={{ label: "Get a Free Consultation", href: "/contact" }}
          contactInfo={getDefaultContactInfo()}
        />
      </LazyLoad>
      <LazyLoad minHeight={320}>
        <AboutPreview />
      </LazyLoad>
      <LazyLoad minHeight={320}>
        <LazyProcessSection />
      </LazyLoad>
      <LazyLoad minHeight={240}>
        <LazyTechnologiesPreview />
      </LazyLoad>
      <LazyLoad minHeight={360}>
        <LazyWhyChooseUs />
      </LazyLoad>
      <LazyLoad minHeight={320}>
        <LazyTestimonials count={3} />
      </LazyLoad>
      <LazyLoad minHeight={280}>
        <LazyFAQ
          items={FAQ_DATA}
          subtitle="Quick answers to common questions about our services and process."
        />
      </LazyLoad>
    </>
  );
}
