const services = [
  { number: '01', title: 'Frontend Development', description: 'Clean, responsive interfaces that make content easy to understand and use.', mark: 'UI' },
  { number: '02', title: 'React Development', description: 'Component-based React experiences with reusable patterns and clear state.', mark: 'R' },
  { number: '03', title: 'Full Stack Development', description: 'Connected frontend and backend foundations for complete web products.', mark: 'FS' },
  { number: '04', title: 'Backend Development', description: 'Express and Node.js APIs that give frontend experiences a reliable foundation.', mark: 'API' },
  { number: '05', title: 'Responsive Websites', description: 'Layouts that stay useful and polished across phones, tablets, and desktops.', mark: '↔' },
  { number: '06', title: 'Database Integration', description: 'MongoDB-backed data flows shaped around the needs of the application.', mark: 'DB' },
]

function Services() {
  return (
    <section className="content-section services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="section-eyebrow">03 / What I do</p>
          <h2 id="services-title">Focused on useful, <span>well-made products.</span></h2>
        </div>
        <p className="section-summary">From first interface to connected data, each layer should feel intentional.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-top"><span className="service-mark" aria-hidden="true">{service.mark}</span><span className="service-number">{service.number}</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
