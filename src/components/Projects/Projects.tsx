import { Reveal } from '../Reveal'
import { ProjectCard } from './ProjectCard'
import { Underline } from '../../art/doodles'
import { projects } from '../../content/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">things I've built</p>
          <h2 className="section-title">
            <span className="underline-wrap">
              Projects
              <Underline />
            </span>
          </h2>
          <p className="section-lead">
            Most of these started at a hackathon over a sleepless weekend — a few grew into real products afterwards.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90} className={styles.cardWrap}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
