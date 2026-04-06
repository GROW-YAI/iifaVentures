import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImg1 from '../assets/images/img (5).webp';
import aboutImg2 from '../assets/images/img (6).webp';
import './About.css';

function About() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      {/* About Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <h1>About IFA VENTURES</h1>
            <p className="about-hero-subtitle">
              Pioneering sustainable solutions that transform waste into opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image">
              <img src={aboutImg1} alt="About IFA VENTURES" />
            </div>
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-text">
                IFA VENTURES is dedicated to reducing waste produced in markets, farms, and saw mills 
                while minimizing reliance on plastic packaging. We create meaningful employment 
                opportunities for youth, women, and persons with disabilities.
              </p>
              <p className="mission-text">
                Our core values center on sustainability, gender equity and inclusivity, 
                climate action, and plastic waste reduction.
              </p>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h4>Inclusivity</h4>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌍</div>
                  <h4>Climate Action</h4>
                </div>
                <div className="value-card">
                  <div className="value-icon">♻️</div>
                  <h4>Waste Reduction</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Production Process</h2>
            <p>From plant waste to premium paper products</p>
          </div>

          <div className="process-grid">
            <div className="process-image">
              <img src={aboutImg2} alt="Production process" />
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Collection & Preparation</h3>
                  <p>
                    We gather plant waste materials from farms, markets, and sawmills, 
                    then sort and clean them to remove impurities.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Pulping & Screening</h3>
                  <p>
                    The shredded waste is cooked to break down lignin and cellulose, 
                    then screened to remove remaining contaminants.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Refining & Bleaching</h3>
                  <p>
                    The pulp is refined for uniformity and bleached to achieve 
                    the desired color without harmful chemicals.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Forming & Drying</h3>
                  <p>
                    The pulp is formed into sheets, pressed to remove water, 
                    and dried using energy-efficient methods.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">05</div>
                <div className="step-content">
                  <h3>Bag Manufacturing</h3>
                  <p>
                    Finally, the paper is cut, folded, and glued to create 
                    durable, eco-friendly bags with custom handles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="future-section">
        <div className="container">
          <div className="future-content">
            <h2>Future Vision</h2>
            <p className="future-text">
              We're expanding our product line to include sanitary pads, boxes, envelopes, 
              egg crates, disposable cups, and plates. Our goal is to become a leading 
              sustainable packaging solutions provider in West Africa.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;