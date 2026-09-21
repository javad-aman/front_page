import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name}
        </p>
        <div className={styles.links}>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
    </footer>
  )
}
