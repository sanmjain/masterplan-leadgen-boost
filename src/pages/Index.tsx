import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import UrgencySection from "@/components/landing/UrgencySection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import PopupForm from "@/components/PopupForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <UrgencySection />
      <FAQSection />
      <FinalCTASection />
      <PopupForm />
    </div>
  );
};

export default Index;
