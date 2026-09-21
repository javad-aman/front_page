import { skills } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-kicker">Toolbox</p>
        <h2 className="section-heading">Skills</h2>
        <p className="section-intro">Grouped by category, roughly in order of daily use.</p>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
