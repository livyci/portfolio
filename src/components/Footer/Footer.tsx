import { Reveal } from '../Reveal'
import { Heart } from '../../art/doodles'
import { GithubIcon, LinkedinIcon, ExternalIcon } from '../../art/icons'
import { profile } from '../../content/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="wrap">
        <Reveal className={styles.card}>
          <p className={styles.eyebrow}>get in touch</p>
          <h2>Let&apos;s work together.</h2>
          <p className={styles.lead}>
            I&apos;m open to internships, collaborations, and hard problems worth solving. Feel free to reach out.
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
          Made with <Heart className={styles.heart} /> by Marlene Kuhn · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
