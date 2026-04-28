import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section footer-about">
              <h3 className="footer-logo">IFA VENTURES</h3>
              <p className="footer-description">
                We extract fiber from plant waste.
              </p>
              <div className="footer-certifications">
                <span className="cert-badge">🌱 Eco-Friendly</span>
                <span className="cert-badge">♻️ Sustainable</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section footer-links">
              <h4>Quick Links</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">
                  <span className="link-icon">→</span> Home
                </Link>
                <Link to="/about" className="footer-link">
                  <span className="link-icon">→</span> About Us
                </Link>
                <Link to="/contact" className="footer-link">
                  <span className="link-icon">→</span> Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="footer-section footer-contact">
              <h4>Get in Touch</h4>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="info-icon">📍</span>
                  <span>Sunyani-Penkwasi, Ghana</span>
                </div>
                <div className="contact-info-item">
                  <span className="info-icon">📞</span>
                  <a href="tel:0208355538">0208355538</a>
                </div>
                <div className="contact-info-item">
                  <span className="info-icon">📧</span>
                  <a href="mailto:ifaventures68@gmail.com">ifaventures68@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-section footer-social">
              <h4>Follow Us</h4>
              <div className="social-media-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fa fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <p className="social-text">
                Stay updated with our latest sustainability initiatives and products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} IFA VENTURES. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;