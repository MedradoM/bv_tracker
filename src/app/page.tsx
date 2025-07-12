import BriefSection from "@/components/briefSection";
import ContactSection from "@/components/contactSection";
import FAQsSection from "@/components/FAQsSection";
import HeroSection from "@/components/heroSection";
import BgGradient from "@/components/ui/bg-gradient";
import WhoWeAreSection from "@/components/whoWeAreSection";
import WorkSection from "@/components/workSection";

export default function Home() {
  return (
    <div id="top" className="flex flex-col h-full gap-32">
      <div className="flex flex-col h-full relative">
        <BgGradient />
        <HeroSection />

        <WorkSection />

        <WhoWeAreSection />

        <BriefSection />

        <FAQsSection />

        <ContactSection />
      </div>
    </div>
  );
}
