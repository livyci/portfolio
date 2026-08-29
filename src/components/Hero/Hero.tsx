import { Star } from '../../art/Star'
import { PinIcon, GithubIcon, ExternalIcon } from '../../art/icons'
import { profile } from '../../content/profile'
import styles from './Hero.module.css'

const SKILLS = [
  { label: 'React', color: 'var(--sky-deep)' },
  { label: 'TypeScript', color: 'var(--lav-deep)' },
  { label: 'Django', color: 'var(--sage-deep)' },
  { label: 'Python', color: 'var(--gold-deep)' },
  { label: 'Supabase', color: 'var(--sage-deep)' },
  { label: 'PostgreSQL', color: 'var(--sky-deep)' },
  { label: 'Vite', color: 'var(--pink-deep)' },
  { label: 'REST APIs', color: 'var(--gold-deep)' },
  { label: 'Claude / LLMs', color: 'var(--lav-deep)' },
  { label: 'Tailwind', color: 'var(--sky-deep)' },
  { label: 'Algorithms', color: 'var(--pink-deep)' },
]

export function Hero() {
  const github = profile.socials.find((s) => s.icon === 'github')

  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.hi}>{profile.hi}</p>
          <h1 className={styles.name}>
            Marlene <span className={styles.u}>Kuhn</span>
          </h1>
          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.sub}>{profile.subheadline}</p>
          <p className={styles.loc}>
            <PinIcon /> {profile.location}
          </p>
          <div className={styles.cta}>
            <a className="btn primary" href="#projects">
              See my work
            </a>
            {github && (
              <a className="btn ghost" href={github.url} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <div className={styles.art}>
          <div className={styles.star}>
            <Star face="excited" title="A cheerful hand-drawn star" />
            <span className={`${styles.badge} ${styles.b1}`}>🥇 SwissHacks winner</span>
            <span className={`${styles.badge} ${styles.b2}`}>ETH Zürich</span>
            <span className={`${styles.badge} ${styles.b3}`}>builder</span>
          </div>
        </div>
      </div>

      <div className={styles.strip} aria-hidden="true">
        <div className={styles.track}>
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span className={styles.chip} key={i}>
              <span className={styles.dot} style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
