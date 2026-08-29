import { PinIcon, GithubIcon, ExternalIcon } from '../../art/icons'
import { Underline, Arrow } from '../../art/doodles'
import { PhotoFrame } from '../PhotoFrame'
import { profile } from '../../content/profile'
import styles from './Hero.module.css'

const SKILLS = [
  'React', 'TypeScript', 'Django', 'Python', 'Supabase',
  'PostgreSQL', 'Vite', 'REST APIs', 'Claude / LLMs', 'Tailwind', 'Algorithms',
]

export function Hero() {
  const github = profile.socials.find((s) => s.icon === 'github')

  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.hi}>{profile.hi}</p>
          <h1 className={styles.name}>
            Marlene{' '}
            <span className="underline-wrap">
              Kuhn
              <Underline />
            </span>
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
              <a className="btn" href={github.url} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <div className={styles.art}>
          <PhotoFrame
            src={profile.photo}
            alt="Marlene Kuhn"
            ratio="portrait"
            tilt={2}
            tape
            placeholderLabel="a photo of me"
            className={styles.photo}
          />
          <span className={styles.note}>that&apos;s me!</span>
          <Arrow className={styles.arrow} />
        </div>
      </div>

      <div className={styles.strip} aria-hidden="true">
        <div className={styles.track}>
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span className={styles.chip} key={i}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
