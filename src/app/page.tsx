import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Exceptionalities from "@/components/Exceptionalities";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import StepsSection from "@/components/StepsSection";
import PrivacySection from "@/components/PrivacySection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import IntegrationSection from "@/components/IntegrationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Exceptionalities />
        <FeaturesSection />
        <ProductsSection />
        <StepsSection />
        <PrivacySection />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <IntegrationSection />
      </main>
      <Footer />
    </>
  );
}
