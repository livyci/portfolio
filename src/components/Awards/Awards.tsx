import { Reveal } from '../Reveal'
import { awards } from '../../content/awards'
import type { Medal } from '../../content/types'
import styles from './Awards.module.css'

const MEDAL: Record<Medal, string> = {
  gold: '🥇',
  silver: '🥈',
  trophy: '🏆',
  star: '⭐',
  spark: '✨',
}

export function Awards() {
  return (
    <section id="awards">
      <div className="wrap">
        <Reveal>
          <p className="section-tag">the trophy shelf</p>
          <h2 className="section-title">Awards & competitions</h2>
        </Reveal>

        <ol className={styles.timeline}>
          {awards.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 60} className={styles.item}>
              <span className={styles.medal} aria-hidden="true">
                {MEDAL[a.medal]}
              </span>
              <div className={styles.body}>
                <span className={styles.date}>{a.date}</span>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.sub}>{a.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
