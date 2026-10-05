function ProjectCard({ project, index }) {
  const hasProjectUrl = Boolean(project.projectUrl)
  const hasSourceUrl = Boolean(project.sourceUrl)
  const isAmazonClone = project.id === 'amazon-clone'

  return (
    <article className="project-card">
      <div className={`project-preview project-preview-${index + 1}`}>
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className={`project-placeholder project-mockup-${isAmazonClone ? 'amazon' : 'bites'}`} aria-label={`${project.title} preview`}>
            <span className="placeholder-window" aria-hidden="true">
              <span /><span /><span />
            </span>
            {isAmazonClone ? (
              <>
                <span className="mockup-store-brand">amazon<span>.clone</span></span>
                <span className="mockup-search">Search products <b>⌕</b></span>
                <span className="mockup-product-row"><i /><i /><i /></span>
              </>
            ) : (
              <>
                <span className="mockup-bites-mark">Delicious <em>Bites</em></span>
                <span className="mockup-bites-copy">Fresh flavor, made with love.</span>
                <span className="mockup-menu-row"><i>MENU</i><i>ORDER</i><i>VISIT</i></span>
              </>
            )}
          </div>
        )}
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-highlight"><strong>Project focus</strong>{project.highlight}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-actions">
          {hasProjectUrl ? (
            <a className="project-link project-link-primary" href={project.projectUrl} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>
          ) : (
            <span className="project-link project-link-disabled" aria-disabled="true">View project pending</span>
          )}
          {hasSourceUrl ? (
            <a className="project-link project-link-secondary" href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
          ) : (
            <span className="project-link project-link-disabled" aria-disabled="true">Source pending</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
