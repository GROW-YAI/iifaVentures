import { useState, useEffect } from 'react';
import heroImg1 from '../assets/images/herp (1).webp';
import heroImg2 from '../assets/images/herp (2).webp';
import heroImg3 from '../assets/images/slider-bg.jpg';
import './Hero.css';

function Hero({ interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImg1,
      title: 'Sustainable Solutions',
      subtitle: 'Transforming plant waste into eco-friendly paper products',
    },
    {
      image: heroImg2,
      title: 'Empowering Communities',
      subtitle: 'Creating opportunities for youth, women, and persons with disabilities',
    },
    {
      image: heroImg3,
      title: 'Environmental Impact',
      subtitle: 'Reducing waste and plastic dependency across Ghana',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, slides.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
          >
            <div className="hero-overlay"></div>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary">
                  Learn More
                </a>
                <a href="/contact" className="btn btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? 'hero-indicator-active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;