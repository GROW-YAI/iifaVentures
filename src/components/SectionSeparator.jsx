import './SectionSeparator.css';

function SectionSeparator() {
  return (
    <div className="section-separator">
      <div className="separator-content">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <i className="fa fa-leaf"></i>
        </div>
        <div className="separator-line"></div>
      </div>
      <div className="separator-wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 70C120 60 240 40 360 33.3C480 27 600 33 720 36.7C840 40 960 40 1080 36.7C1200 33 1320 27 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

export default SectionSeparator;