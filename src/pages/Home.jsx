import Hero from "../components/Hero";
import TreasureProfile from "../components/TreasureProfile";
import FeaturedGames from "../components/FeaturedGames";
import EventHighlights from "../components/EventHighlights";
import FeatureCards from "../components/FeatureCards";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <main className="bg-[#2A1E68]">
      <Hero />

      <TreasureProfile />

      <FeaturedGames />

      <EventHighlights />

      <FeatureCards />

      <CTASection />
    </main>
  );
}

export default Home;