import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      {/* Contact Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We'd love to hear from you. Reach out with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Have questions about our products or services? We're here to help. 
                Reach out to us through any of the channels below.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Visit Us</h4>
                    <p>Sunyani-Penkwasi, Ghana</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Call Us</h4>
                    <p><a href="tel:0208355538">0208355538</a></p>
                    <p><a href="tel:0554860106">0554860106</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email Us</h4>
                    <p><a href="mailto:ifaventures68@gmail.com">ifaventures68@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" action="#" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d-2.3306102!3d7.3496866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjAnNTguOSJOIDLCsDE5JzUwLjIiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IFA VENTURES Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;