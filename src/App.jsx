import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import CaseSection from './components/CaseSection';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { initializeBoafoWidget } from 'boafo-accessibility-widget';

function App() {
  useEffect(() => {
    // Initialize Boafo Accessibility Widget
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY || 'boafo_5678';
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="hero_area">
              <Navbar />
              <Hero />
            </div>
            <AboutPreview />
            <CaseSection />
            <Footer />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;