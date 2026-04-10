import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedStrip from "./components/FeaturedStrip";
import MenuSection from "./components/MenuSection";
import SignatureDishes from "./components/SignatureDishes";
import CateringSection from "./components/CateringSection";
import AboutSection from "./components/AboutSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-[var(--text-primary)]">
      <Header />

      <main>
        <div className="section-hero">
          <Hero />
        </div>

        <div className="section-about">
          <AboutSection />
        </div>

        <div className="section-menu">
          <MenuSection />
        </div>

        <div className="section-signature">
          <SignatureDishes />
        </div>

        <div className="section-catering">
          <CateringSection />
        </div>

        <div className="section-reviews">
          <ReviewsSection />
        </div>

        <div className="section-contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;