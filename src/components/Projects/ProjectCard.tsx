import type { CSSProperties } from 'react'
import type { Accent, Project } from '../../content/types'
import { ProjectIcon, ExternalIcon, GithubIcon } from '../../art/icons'
import { Heart } from '../../art/doodles'
import { PhotoFrame } from '../PhotoFrame'
import styles from './Projects.module.css'

const ACCENT: Record<Accent, { base: string; deep: string }> = {
  gold: { base: 'var(--gold)', deep: 'var(--gold-deep)' },
  rose: { base: 'var(--rose)', deep: 'var(--rose-deep)' },
  clay: { base: 'var(--clay)', deep: 'var(--clay-deep)' },
  sage: { base: 'var(--sage)', deep: 'var(--sage-deep)' },
  plum: { base: 'var(--plum)', deep: 'var(--plum-deep)' },
}

export function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENT[project.accent]
  const style = { '--accent': accent.base, '--accent-deep': accent.deep } as CSSProperties
  const isHackathon = project.kind === 'Hackathon'

  return (
    <article className={styles.card} style={style}>
      <PhotoFrame
        src={project.screenshot}
        alt={`${project.name} screenshot`}
        ratio="wide"
        placeholderLabel="screenshot"
        className={styles.shot}
      />

      <div className={styles.body}>
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

        {isHackathon && project.teamPhoto && (
          <div className={styles.team}>
            <PhotoFrame
              src={project.teamPhoto}
              alt={`${project.name} team`}
              ratio="square"
              placeholderLabel="team"
              className={styles.teamPhoto}
            />
            <span className={styles.teamLabel}>
              {project.team ? (
                <>
                  built with <b>{project.team}</b>
                  <Heart className={styles.heart} />
                </>
              ) : (
                <>my lovely hackathon team</>
              )}
            </span>
          </div>
        )}

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
      </div>
    </article>
  )
}
