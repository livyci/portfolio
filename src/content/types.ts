export type Accent = 'gold' | 'pink' | 'sage' | 'lav' | 'sky'

export type IconKey =
  | 'zetlar'
  | 'groundtruth'
  | 'epaflow'
  | 'scannedit'
  | 'skippre'
  | 'docksbase'
  | 'starlit'

export type LinkKind = 'live' | 'github' | 'demo'

export interface ProjectLink {
  kind: LinkKind
  label: string
  url: string
}

export type ProjectKind = 'Hackathon' | 'Product' | 'Personal'

export interface Project {
  slug: string
  name: string
  icon: IconKey
  accent: Accent
  kind: ProjectKind
  /** e.g. "SwissHacks 2026 · Ripple" */
  event: string
  /** short award line shown as a chip, e.g. "🥇 1st overall" */
  award?: string
  /** one-line pitch */
  tagline: string
  /** 2–3 sentence description */
  description: string
  tags: string[]
  links: ProjectLink[]
}

export type Medal = 'gold' | 'silver' | 'trophy' | 'star' | 'spark'

export interface Award {
  date: string
  title: string
  subtitle: string
  medal: Medal
}

export interface Social {
  label: string
  url: string
  icon: 'github' | 'linkedin'
}

export interface Profile {
  name: string
  hi: string
  headline: string
  subheadline: string
  location: string
  socials: Social[]
}
