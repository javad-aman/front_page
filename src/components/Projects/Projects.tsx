import { useMemo, useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const ALL = 'All'

export default function Projects() {
  const tags = useMemo(() => {
    const unique = new Set<string>()
    projects.forEach((project) => project.tags.forEach((tag) => unique.add(tag)))
    return [ALL, ...Array.from(unique).sort()]
  }, [])

  const [activeTag, setActiveTag] = useState<string>(ALL)

  const visibleProjects = useMemo(() => {
    if (activeTag === ALL) return projects
    return projects.filter((project) => project.tags.includes(activeTag))
  }, [activeTag])

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-heading">Projects</h2>
        <p className="section-intro">
          A mix of personal tools, community projects, and small product experiments.
        </p>

        <div className={styles.filters} role="group" aria-label="Filter projects by tag">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`${styles.filterButton} ${activeTag === tag ? styles.filterButtonActive : ''}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
