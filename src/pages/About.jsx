import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImg1 from '../assets/images/img (5).webp';
import aboutImg2 from '../assets/images/img (6).webp';

function About() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Navbar />
      </div>

      <section className="about_section layout_padding layout_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  The aim is to reduce the waste produced in markets, farms, saw
                  mills etc, reduce reliance on plastic packaging and more
                  importantly create jobs for the youth, women and persons with
                  disabilities.
                </p>
                <p>
                  Our core values are sustainability, gender equity and
                  inclusivity, climate action, and plastic waste reduction.
                </p>
                <p>
                  Going forward we want to produce sanitary pads as well as other
                  packages like boxes, envelopes, egg crates, disposable cups and
                  plates amongst others.
                </p>
                <br />
                <br />
                <p>
                  The product goes through the following processes:
                </p>
                <h5>Collection and Preparation</h5>
                <p>
                  1. Collection of plant waste: Gather plant waste materials
                  (e.g. plantain, banana, sawdust etc.) from various sources
                  (e.g., farms, market, sawmill).
                  <br />
                  2. Sorting and cleaning: Sort and clean the collected plant
                  waste to remove impurities, dirt, and other contaminants.
                  <br />
                  3. Shredding or chopping: Shred or chop the plant waste into
                  smaller pieces to increase their surface area.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg1} alt="About IFA VENTURES process" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding layout_margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2></h2>
                </div>
                <p>
                  <h5>Pulping and Screening</h5>
                  1. Pulping: Cook the shredded plant waste in to break down the
                  lignin and cellulose.
                  <br />
                  2. Screening: Pass the pulp through a series of screens to
                  remove impurities, such as dirt, bark, or other contaminants.
                  <br />
                  <br />
                  <h5>Refining and Bleaching</h5>
                  1. Refining: Refine the pulp to make it finer and more uniform.
                  <br />
                  2. Bleaching: Bleach the pulp to remove natural pigments and
                  achieve the desired color.
                  <br />
                  <br />
                  <h5>Forming and Pressing</h5>
                  1. Forming: Form the pulp into a paper sheet using a machine or
                  by hand (like me).
                  <br />
                  2. Pressing: Press the paper sheet to remove excess water and
                  flatten it.
                  <br />
                  <br />
                  <h5>Drying and Cutting</h5>
                  1. Drying: Dry the paper sheet using heat from a machine or air
                  drying (as we do).
                  <br />
                  2. Cutting: Cut the dried paper sheet into individual sheets or
                  rolls.
                  <br />
                  <br />
                  <h5>Bag Making</h5>
                  1. Sheeting: Cut the paper sheets into the desired size for bag
                  making.
                  <br />
                  2. Folding and gluing: Fold and glue the paper sheets to form
                  the bag shape.
                  <br />
                  3. Handle attachment: Attach handles (e.g., paper, cotton, or
                  jute) to the bag.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg2} alt="IFA VENTURES production process" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;