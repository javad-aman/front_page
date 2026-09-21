import { experience } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-kicker">Career</p>
        <h2 className="section-heading">Experience</h2>
        <p className="section-intro">
          Six years turning messy real-world data — financial, manufacturing, and
          transportation — into production ML systems that people actually rely on.
        </p>

        <ol className={styles.timeline}>
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className={styles.item}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.headRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.dates}>
                    {item.start} – {item.end}
                  </span>
                </div>
                <p className={styles.companyLine}>
                  {item.company} · {item.location}
                </p>
                <ul className={styles.bullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
