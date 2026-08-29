import { useState } from 'react'
import { Star } from '../../art/Star'
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from '../../art/icons'
import { profile } from '../../content/profile'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.wordmark} onClick={close}>
          <Star face="happy" className={styles.mark} />
          Marlene
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a className={styles.cta} href="#contact" onClick={close}>
            Say hi ✨
          </a>
          <div className={styles.socialsMobile}>
            {profile.socials.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} onClick={close}>
                {s.icon === 'github' ? <GithubIcon /> : <LinkedinIcon />}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.socials}>
          {profile.socials.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
              {s.icon === 'github' ? <GithubIcon /> : <LinkedinIcon />}
            </a>
          ))}
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
