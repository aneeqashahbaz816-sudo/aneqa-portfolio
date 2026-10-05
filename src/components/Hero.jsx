const technologies = [
  { name: 'React', mark: 'R', className: 'tech-react' },
  { name: 'Node.js', mark: 'N', className: 'tech-node' },
  { name: 'Express', mark: 'Ex', className: 'tech-express' },
  { name: 'MongoDB', mark: 'M', className: 'tech-mongo' },
]

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker"><span /> Available for new opportunities</p>
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 id="hero-title">Aneeqa <span>Shahbaz</span></h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-description">
          I build modern, responsive and high-performance web applications using React,
          Node.js, Express and MongoDB.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my work <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="technology-list" aria-label="Core technologies">
          {technologies.map((technology) => (
            <div className="technology" key={technology.name}>
              <span className={`technology-mark ${technology.className}`} aria-hidden="true">
                {technology.mark}
              </span>
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
        <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
        <div className="hero-image-frame">
          <img
            src="/image/image.png"
            alt="Aneeqa Shahbaz working at a laptop in a developer workspace"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="visual-note visual-note-top" aria-hidden="true">
          <span className="note-dot" /> clean code
        </div>
        <div className="visual-note visual-note-bottom" aria-hidden="true">
          <span>{'</>'}</span> build with purpose
        </div>
      </div>
    </section>
  )
}

export default Hero
