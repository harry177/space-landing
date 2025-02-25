import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { OffersSection } from "./components/OffersSection/OffersSection";
import { JourneySection } from "./components/JourneySection/JourneySection";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <OffersSection />
        <JourneySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
