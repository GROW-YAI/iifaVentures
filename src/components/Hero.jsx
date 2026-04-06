import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import carousel images
import img1 from '../assets/images/herp (1).webp';
import img2 from '../assets/images/img (2).webp';
import img3 from '../assets/images/img (3).webp';

const carouselImages = [img1, img2, img3];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel" ref={carouselRef}>
        <div className="carousel-inner">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={img} alt={`IFA VENTURES slide ${index + 1}`} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>IFA VENTURES</h1>
                      <p>
                        Aims to reduce the waste produced in markets, farms, saw mills etc,
                        reduce reliance on plastic packaging and more importantly create jobs
                        for the youth, women and persons with disabilities.
                      </p>
                      <div className="btn-box">
                        <Link to="/contact" className="btn1">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ol className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <li
              key={index}
              data-target="#customCarousel1"
              data-slide-to={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleSlideTo(index)}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Hero;