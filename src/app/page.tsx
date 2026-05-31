import Hero from "@/components/sections/Hero/Hero";
import Solutions from "@/components/sections/Solutions/Solutions";
import FeatureShowcase from "@/components/sections/FeatureShowcase/FeatureShowcase";
import CoreBankingFeatures from "@/components/sections/CoreBankingFeatures/CoreBankingFeatures";
import PaperlessCTA from "@/components/sections/PaperlessCTA/PaperlessCTA";
import MarqueeStrip from "@/components/sections/MarqueeStrip/MarqueeStrip";
import DigitalBanking from "@/components/sections/DigitalBanking/DigitalBanking";
import Insights from "@/components/sections/Insights/Insights";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Solutions />
        <FeatureShowcase />
        <CoreBankingFeatures />
        <PaperlessCTA variant="cb7" />
        <MarqueeStrip />
        <DigitalBanking />

        <Insights />
        <CaseStudies />
        <PaperlessCTA variant="clean" />
      </main>
      <Footer />
    </>
  );
}
