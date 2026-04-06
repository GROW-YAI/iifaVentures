import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      {/* Contact section is commented out in original, keeping the same structure */}
      {/* <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1">
              <div className="form_container">
                <div className="heading_container">
                  <h2 className="contacttext">Contact Us</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="d-flex ">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="footer_container">
        <section className="info_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="info_detail">
                  <h4>IFA VENTURES</h4>
                  <p>
                    We extract fiber from plant waste such as plantain and banana
                    waste, saw dust etc to make paper bags. The waste is sourced
                    from the local community, markets, farms, etc.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mx-auto">
                <div className="info_link_box">
                  <h4>Links</h4>
                  <div className="info_links">
                    <a className="" href="/">
                      Home
                    </a>
                    <a className="" href="/about">
                      About
                    </a>
                    <a className="" href="/contact">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-0 ml-auto">
                <div className="info_contact">
                  <h4>Address</h4>
                  <div className="contact_link_box">
                    <a
                      href="https://www.google.com/maps/search/Sunyani-Penkwase/@7.3496866,-2.3306102,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Sunyani-Penkwasi</span>
                    </a>
                    <a href="tel:0208355538">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Call 0208355538</span>
                    </a>
                    <a href="tel:0554860106">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>0554860106</span>
                    </a>
                    <a href="mailto:ifaventures68@gmail.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>ifaventures68@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div className="info_social">
                  <a href="" aria-label="Facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="" aria-label="Twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="" aria-label="LinkedIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="" aria-label="Instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="footer_section">
          <div className="container">
            <div
              style={{
                borderTop: '1px dashed #ccc',
                padding: '10px',
                textAlign: 'center',
                color: 'aliceblue',
              }}
            >
              <hr />
            </div>
            <p>@Copyright 2025</p>
          </div>
        </footer>
        <div className="latergreen"></div>
      </div>
    </div>
  );
}

export default Contact;