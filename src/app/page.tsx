import HeroSection from "./components/Hero/HeroSection";
import OfferSection from "./components/OfferSection/OfferSection";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="max-w-screen">
      <HeroSection />
      <OfferSection />
      <Testimonials />
    </div>
  );
}
