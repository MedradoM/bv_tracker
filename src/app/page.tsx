import FAQsSection from "@/components/FAQsSection";
import HeroSection from "@/components/heroSection";
import BgGradient from "@/components/ui/bg-gradient";
import WhoWeAreSection from "@/components/whoWeAreSection";

export default function Home() {
  return (
    <div className="flex flex-col h-full gap-32">
      <div className="flex flex-col h-full gap-32 relative">
        <BgGradient />
        <HeroSection />

        <WhoWeAreSection />

        <FAQsSection />
      </div>
    </div>
  );
}
