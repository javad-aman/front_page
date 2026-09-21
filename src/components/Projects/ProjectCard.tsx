import type { Project } from '../../data/types'
import styles from './Projects.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className={styles.thumbFallback} aria-hidden="true">
            {project.title.charAt(0)}
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        <ul className={styles.cardTags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className={styles.cardLinks}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
