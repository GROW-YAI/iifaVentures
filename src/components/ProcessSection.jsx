import './ProcessSection.css';

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Collection',
      description: 'We gather plantain and banana waste, sawdust, and other agricultural byproducts from local farms.',
      icon: '🌾',
    },
    {
      number: '02',
      title: 'Fiber Extraction',
      description: 'Using sustainable methods, we extract high-quality fibers from the collected plant waste.',
      icon: '🔬',
    },
    {
      number: '03',
      title: 'Processing',
      description: 'The fibers are processed and transformed into pulp ready for paper production.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Manufacturing',
      description: 'We manufacture eco-friendly paper bags that are biodegradable and sustainable.',
      icon: '📦',
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Process</span>
          <h2>From Waste to Wonder</h2>
          <p className="section-description">
            Discover how we transform agricultural waste into sustainable paper products
            through our innovative and eco-friendly process.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number">{step.number}</div>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;