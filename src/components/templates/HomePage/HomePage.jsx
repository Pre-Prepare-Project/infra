import HomeHero from "@/components/templates/HomeHero/HomeHero";
import TrustBar from "@/components/organisms/home/TrustBar/TrustBar";
import AboutPreview from "@/components/organisms/home/AboutPreview/AboutPreview";
import LazyLoad from "@/components/atoms/LazyLoad/LazyLoad";
import {
  LazyHomeServices,
  LazyHomeProducts,
  LazyProcessSection,
  LazyTechnologiesPreview,
  LazyWhyChooseUs,
  LazyStatistics,
  LazyTestimonials,
  LazyFAQ,
  LazyCTA,
} from "@/lib/lazyComponents";
import { FAQ_HOME, STATISTICS } from "@/data";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import { mapFaqForComponent, mapStatisticsForComponent } from "@/utils/data";

const STATS = mapStatisticsForComponent(STATISTICS);
const FAQ_DATA = mapFaqForComponent(FAQ_HOME);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <AboutPreview />
      <LazyLoad minHeight={400}>
        <LazyHomeServices />
      </LazyLoad>
      <LazyLoad minHeight={400}>
        <LazyHomeProducts />
      </LazyLoad>
      <LazyLoad minHeight={320}>
        <LazyProcessSection />
      </LazyLoad>
      <LazyLoad minHeight={240}>
        <LazyTechnologiesPreview />
      </LazyLoad>
      <LazyLoad minHeight={200}>
        <LazyStatistics
          overline="By The Numbers"
          title="Trusted by Businesses Worldwide"
          subtitle="Our track record speaks for itself — delivering excellence across every project."
          items={STATS}
          columns={5}
        />
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
      <LazyLoad minHeight={240}>
        <LazyCTA
          title="Let's Build Something Amazing Together"
          subtitle="Ready to transform your business with custom software? Get a free consultation with our experts today."
          variant="dark"
          primaryAction={{ label: "Get a Free Consultation", href: "/contact" }}
          secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
          contactInfo={getDefaultContactInfo()}
        />
      </LazyLoad>
    </>
  );
}
