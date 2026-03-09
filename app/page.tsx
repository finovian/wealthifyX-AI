import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SocialProofBar from "./components/SocialProofBar";
import ToolsDirectory from "./components/ToolsDirectory";
import FeatureCards from "./components/FeatureCards";
import InlineCalculator from "./components/InlineCalculator";
import EmailCapture from "./components/EmailCapture";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ToolsDirectory />
        <FeatureCards />
        <InlineCalculator />
        <EmailCapture />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
