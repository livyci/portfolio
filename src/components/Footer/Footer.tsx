import { Reveal } from '../Reveal'
import { Star } from '../../art/Star'
import { GithubIcon, LinkedinIcon, ExternalIcon } from '../../art/icons'
import { profile } from '../../content/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="wrap">
        <Reveal className={styles.card}>
          <span className={styles.bigStar}>
            <Star face="happy" />
          </span>
          <h2>Let's make something lovely.</h2>
          <p>
            I'm always up for a good hackathon, an internship, or just a chat about building things. Come say hi ✨
          </p>
          <div className={styles.socials}>
            {profile.socials.map((s) => (
              <a key={s.url} className="btn primary" href={s.url} target="_blank" rel="noreferrer">
                {s.icon === 'github' ? <GithubIcon /> : <LinkedinIcon />}
                {s.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        </Reveal>

        <p className={styles.note}>
          Made with <span className={styles.heart}>♥</span> and far too many stars, in the Starlit style · © {new Date().getFullYear()} Marlene Kuhn
        </p>
      </div>
    </footer>
  )
}
