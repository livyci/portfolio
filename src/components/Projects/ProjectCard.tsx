import type { CSSProperties } from 'react'
import type { Accent, Project } from '../../content/types'
import { ProjectIcon, ExternalIcon, GithubIcon } from '../../art/icons'
import styles from './Projects.module.css'

const ACCENT: Record<Accent, { base: string; deep: string }> = {
  gold: { base: 'var(--gold)', deep: 'var(--gold-deep)' },
  pink: { base: 'var(--pink)', deep: 'var(--pink-deep)' },
  sage: { base: 'var(--sage)', deep: 'var(--sage-deep)' },
  lav: { base: 'var(--lav)', deep: 'var(--lav-deep)' },
  sky: { base: 'var(--sky)', deep: 'var(--sky-deep)' },
}

export function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENT[project.accent]
  const style = { '--accent': accent.base, '--accent-deep': accent.deep } as CSSProperties

  return (
    <article className={styles.card} style={style}>
      <div className={styles.top}>
        <span className={styles.ico}>
          <ProjectIcon icon={project.icon} />
        </span>
        <div className={styles.titles}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.meta}>
            {project.kind} · {project.event}
          </p>
        </div>
      </div>

      {project.award && <span className={styles.award}>{project.award}</span>}

      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.desc}>{project.description}</p>

      <ul className={styles.tags}>
        {project.tags.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className={styles.links}>
          {project.links.map((l) => (
            <a
              key={l.url}
              className={`${styles.link} ${l.kind === 'live' ? styles.solid : ''}`}
              href={l.url}
              target="_blank"
              rel="noreferrer"
            >
              {l.kind === 'github' ? <GithubIcon /> : <ExternalIcon />}
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
