import { Reveal } from '../Reveal'
import { FactIcon } from '../../art/icons'
import { Underline } from '../../art/doodles'
import { bio, facts } from '../../content/profile'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section-alt">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">a little about me</p>
          <h2 className="section-title">
            <span className="underline-wrap">
              Nice to meet you
              <Underline />
            </span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.bioCard}>
            <p className={styles.lead}>
              I love turning <span className="hl">messy problems</span> into things people can{' '}
              <span className="hl sage">actually use</span>.
            </p>
            {bio.map((para, i) => (
              <p key={i} className={styles.para}>
                {para}
              </p>
            ))}
          </Reveal>

          <ul className={styles.facts}>
            {facts.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80} className={styles.fact}>
                <span className={styles.factIco}>
                  <FactIcon icon={f.icon} />
                </span>
                <div>
                  <h3 className={styles.factTitle}>{f.title}</h3>
                  <p className={styles.factBody}>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
