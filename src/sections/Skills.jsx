const skillGroups = [
  {
    category: 'Frontend',
    description: 'Interfaces that are responsive, readable, and built for real use.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    accent: 'skill-violet',
  },
  {
    category: 'Backend',
    description: 'Server foundations for APIs, routing, and application logic.',
    skills: ['Node.js', 'Express.js'],
    accent: 'skill-cyan',
  },
  {
    category: 'Database',
    description: 'Practical data persistence for connected web applications.',
    skills: ['MongoDB'],
    accent: 'skill-green',
  },
  {
    category: 'Tools',
    description: 'The everyday tools that keep development organized.',
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: 'skill-amber',
  },
]

function Skills() {
  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="section-eyebrow">02 / Toolkit</p>
          <h2 id="skills-title">The tools behind <span>the work.</span></h2>
        </div>
        <p className="section-summary">A growing, practical toolkit for creating complete web experiences.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className={`skill-card ${group.accent}`} key={group.category}>
            <div className="skill-card-top"><span className="skill-symbol" aria-hidden="true">{group.category.slice(0, 1)}</span><span className="skill-index">0{skillGroups.indexOf(group) + 1}</span></div>
            <h3>{group.category}</h3>
            <p>{group.description}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
