const highlights = [
  { value: '02', label: 'Projects in showcase' },
  { value: '10', label: 'Core tools listed' },
  { value: 'Ongoing', label: 'Learning journey' },
]

function About() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-eyebrow">01 / About me</p>
        <h2 id="about-title">Building with curiosity, <span>shipping with care.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-intro">
          <p className="lead-copy">
            I&apos;m Aneeqa, a developer focused on turning thoughtful ideas into clear,
            useful digital experiences.
          </p>
          <p>
            My interests sit at the intersection of polished frontend interfaces and
            dependable backend systems. I&apos;m developing my full-stack practice by
            learning how each layer works together, from a responsive React interface
            to an Express API and a MongoDB data model.
          </p>
          <p>
            I care about accessible layouts, maintainable code, and the small details
            that make a product feel considered.
          </p>
        </div>
        <div className="about-focus" aria-label="Development focus areas">
          <div className="focus-item">
            <span className="focus-number">01</span>
            <div><h3>Frontend</h3><p>Responsive interfaces with React, JavaScript, HTML, and CSS.</p></div>
          </div>
          <div className="focus-item">
            <span className="focus-number">02</span>
            <div><h3>Backend</h3><p>RESTful services and server-side logic with Node.js and Express.</p></div>
          </div>
          <div className="focus-item">
            <span className="focus-number">03</span>
            <div><h3>Data</h3><p>Structured persistence and integration with MongoDB.</p></div>
          </div>
        </div>
      </div>
      <div className="highlight-row">
        {highlights.map((highlight) => (
          <div className="highlight" key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
