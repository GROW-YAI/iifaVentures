import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/img (4).webp';

function AboutPreview() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>
                Our core values are sustainability, gender equity and inclusivity,
                climate action, and plastic waste reduction.
              </p>
              <p>
                Going forward we want to produce sanitary pads as well as other
                packages like boxes, envelopes, egg crates, disposable cups and
                plates amongst others.
              </p>
              <Link to="/about" className="btn1">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutImg} alt="About IFA VENTURES" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;