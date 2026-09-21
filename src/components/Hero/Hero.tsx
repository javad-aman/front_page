import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.location}>{profile.location}</p>
        <h1 className={styles.name}>
          Hi, I&apos;m <span className="gradient-text">{profile.displayName}</span>
        </h1>
        <h2 className={styles.title}>{profile.title}</h2>
        <p className={styles.tagline}>{profile.tagline}</p>
        <p className={styles.bio}>{profile.bio}</p>

        <div className={styles.actions}>
          <a
            className={styles.primaryLink}
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            View Résumé
          </a>
          <a className={styles.secondaryLink} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className={styles.socials}>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className={styles.dot}>·</span>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className={styles.dot}>·</span>
          <a href={profile.links.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  )
}
