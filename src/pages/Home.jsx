import Hero from "../components/Hero";
import NextEvent from "../components/NextEvent";
import FeaturedGames from "../components/FeaturedGames";
import EventHighlights from "../components/EventHighlights";
import FeatureCards from "../components/FeatureCards";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="bg-[#2A1E68]">
      <Hero />
      <NextEvent />
      <FeaturedGames />
      <EventHighlights />
      <FeatureCards />
      <CTASection />
    </main>
  );
}

export default Home;