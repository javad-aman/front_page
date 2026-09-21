import { education } from '../../data/education'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-kicker">Background</p>
        <h2 className="section-heading">Education</h2>
        <p className="section-intro">
          Formal training in transportation engineering and data science, plus continued
          education in applied ML.
        </p>

        <div className={styles.grid}>
          {education.map((item) => (
            <article key={item.degree} className={styles.card}>
              <span className={styles.year}>{item.year}</span>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>
                {item.institution} · {item.location}
              </p>
              {item.details && <p className={styles.details}>{item.details}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
