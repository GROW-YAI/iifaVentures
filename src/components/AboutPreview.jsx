import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/img (5).webp';
import './AboutPreview.css';

function AboutPreview() {
  return (
    <section className="about-preview" id="about">
      <div className="container">
        <div className="about-preview-grid">
          <div className="about-preview-image">
            <img src={aboutImg} alt="About IFA VENTURES" />
            <div className="image-accent"></div>
          </div>
          <div className="about-preview-content">
            <span className="section-label">About Us</span>
            <h2>Transforming Waste into Opportunity</h2>
            <p className="about-description">
              IFA VENTURES extracts fiber from plant waste such as plantain and banana waste, 
              saw dust, and other agricultural byproducts to create high-quality paper bags. 
              We are committed to sustainability, community empowerment, and environmental protection.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <div className="feature-text">
                  <h4>Eco-Friendly</h4>
                  <p>100% biodegradable products</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div className="feature-text">
                  <h4>Inclusive</h4>
                  <p>Employment for all community members</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">♻️</div>
                <div className="feature-text">
                  <h4>Sustainable</h4>
                  <p>Zero-waste production process</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;