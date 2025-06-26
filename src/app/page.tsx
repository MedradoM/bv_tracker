import ContactSection from "@/components/contactSection";
import FAQsSection from "@/components/FAQsSection";
import HeroSection from "@/components/heroSection";
import BgGradient from "@/components/ui/bg-gradient";
import WhatsAppButton from "@/components/whatsappButton";
import WhoWeAreSection from "@/components/whoWeAreSection";

export default function Home() {
  return (
    <div id="top" className="flex flex-col h-full gap-32">
      <div className="flex flex-col h-full gap-  relative">
        <BgGradient />
        <HeroSection />

        <WhoWeAreSection />

        <FAQsSection />

        <ContactSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}
