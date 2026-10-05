import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="section-eyebrow">04 / Selected work</p>
          <h2 id="projects-title">Small builds, <span>real practice.</span></h2>
        </div>
        <p className="section-summary">A growing collection of interfaces built while developing a full-stack practice.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  )
}

export default Projects
