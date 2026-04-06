import { Link } from 'react-router-dom';
import caseImg1 from '../assets/images/img (6).webp';
import caseImg2 from '../assets/images/img (5).webp';

function CaseSection() {
  return (
    <section className="case_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2></h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src={caseImg1} alt="Sorting and cleaning" />
              </div>
              <div className="detail-box">
                <h5>Sorting and cleaning</h5>
                <p>
                  Sort and clean the collected plant waste to remove impurities,
                  dirt, and other contaminants.
                </p>
                <Link to="/about">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src={caseImg2} alt="Collection of plant waste" />
              </div>
              <div className="detail-box">
                <h5>Collection of plant waste</h5>
                <p>
                  Gather plant waste materials (e.g. plantain, banana, sawdust etc.)
                  from various sources (e.g., farms, market, sawmill).
                </p>
                <Link to="/about">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseSection;