export type Accent = 'gold' | 'rose' | 'clay' | 'sage' | 'plum'

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
  /** the team this was built with, e.g. "Team Unicorn" */
  team?: string
  /** path to a team photo under /public/photos — shown as a framed slot */
  teamPhoto?: string
  /** path to a product screenshot under /public/photos */
  screenshot?: string
  /** one-line pitch */
  tagline: string
  /** 2–3 sentence description */
  description: string
  tags: string[]
  links: ProjectLink[]
}

export type Medal = 'gold' | 'silver' | 'trophy' | 'ribbon'

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
  /** path to a portrait under /public/photos */
  photo?: string
  socials: Social[]
}
