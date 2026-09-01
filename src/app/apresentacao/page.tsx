import HeroSection from "@/components/heroSection";
import ChatIASection from "@/components/presentation-sections/chat-ia-section";
import DashboardsSection from "@/components/presentation-sections/dashboards";
import ResultsSection from "@/components/presentation-sections/results";
import BgGradient from "@/components/ui/bg-gradient";

const PresentationPage = () => {
    return (

<div id="top" className="flex flex-col h-full gap-32">
      <div className="flex flex-col h-full relative">
        <BgGradient />
        <HeroSection />
        <ResultsSection />
        <DashboardsSection />
        <ChatIASection />
        {/* <PartnersSection /> */}
      </div>
    </div>
    )
}

export default PresentationPage;
