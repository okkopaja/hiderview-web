import BlankPopup from "@/components/landing/BlankPopup";
import Compatibility from "@/components/landing/Compatibility";
import ComparisonRevealSlider from "@/components/landing/ComparisonRevealSlider";
import DemoVideo from "@/components/landing/DemoVideo";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowToUse from "@/components/landing/HowToUse";
import TestingGuide from "@/components/landing/TestingGuide";
import Controls from "@/components/landing/Controls";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import TrustedCompanies from "@/components/landing/TrustedCompanies";
import WhyChoose from "@/components/landing/WhyChoose";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Compatibility />
        <ComparisonRevealSlider />
        <TrustedCompanies />
        <Features />
        <DemoVideo />
        <HowToUse />
        <TestingGuide />
        <Controls />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BlankPopup />
    </div>
  );
}
