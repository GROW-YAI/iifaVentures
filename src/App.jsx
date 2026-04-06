import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { initializeBoafoWidget } from 'boafo-accessibility-widget';

function App() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutPreview />
              <ProcessSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;