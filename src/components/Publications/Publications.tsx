import { profile } from '../../data/profile'
import { publications } from '../../data/publications'
import styles from './Publications.module.css'

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <p className="section-kicker">Research</p>
        <h2 className="section-heading">Publications</h2>
        <p className="section-intro">
          6+ peer-reviewed publications, 490+ citations. Selected below — see{' '}
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noreferrer"
            className={styles.scholarLink}
          >
            Google Scholar
          </a>{' '}
          for the full list.
        </p>

        <ul className={styles.list}>
          {publications.map((pub) => (
            <li key={pub.title} className={styles.item}>
              <a
                href={pub.url ?? '#'}
                target="_blank"
                rel="noreferrer"
                className={styles.title}
              >
                {pub.title}
              </a>
              <p className={styles.meta}>
                {pub.authors} — <em>{pub.venue}</em>, {pub.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
