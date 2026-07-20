import SunburstHero from "@/components/sunburst-hero";
import ArrowHero from "@/components/arrow-hero";
import TypingHero from "@/components/typing-hero";
import MeetFounder from "@/components/meet-founder";
import PortfolioProjects from "@/components/portfolio-projects";
import TechStack from "@/components/tech-stack";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <SunburstHero />
      <ArrowHero />
      <TypingHero />
      <MeetFounder />
      <PortfolioProjects />
      <TechStack />
      <CtaSection />
      <Footer />
    </>
  );
}
