import type { IconKey } from '../content/types'

/* ----------------------------------------------------------------
   All icons are hand-drawn line art: ink stroke, round caps/joins,
   with a single accent highlight via `currentColor` (set by the
   parent, e.g. a project card's accent).

   `s` is spread FIRST on every shape; any explicit `fill` after it
   wins. Shapes with no explicit fill fall back to `s.fill = 'none'`.
   ---------------------------------------------------------------- */

const s = {
  fill: 'none',
  stroke: 'var(--ink)',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const soft = 'currentColor'

function Svg({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  )
}

/* ---------------- Project icons ---------------- */

function Zetlar() {
  return (
    <Svg label="Zetlar">
      <path {...s} d="M15 8 h13 l-3 12 h6 l-14 20 4 -15 h-6 z" fill={soft} fillOpacity={0.35} />
    </Svg>
  )
}

function GroundTruth() {
  return (
    <Svg label="Ground Truth">
      <line {...s} x1={16} y1={14} x2={31} y2={24} />
      <line {...s} x1={16} y1={14} x2={14} y2={33} />
      <line {...s} x1={31} y1={24} x2={14} y2={33} />
      <line {...s} x1={31} y1={24} x2={35} y2={38} />
      <circle {...s} cx={16} cy={14} r={5} fill={soft} fillOpacity={0.35} />
      <circle {...s} cx={31} cy={24} r={5.5} fill={soft} fillOpacity={0.35} />
      <circle {...s} cx={14} cy={33} r={4.5} fill="var(--card)" />
      <circle {...s} cx={36} cy={38} r={4} fill="var(--card)" />
    </Svg>
  )
}

function EpaFlow() {
  return (
    <Svg label="epaFlow">
      <path {...s} d="M13 7 h15 l7 7 v27 h-22 z" fill={soft} fillOpacity={0.3} />
      <path {...s} d="M28 7 v7 h7" />
      <path {...s} d="M14 28 h5 l3 -6 4 12 3 -6 h5" />
    </Svg>
  )
}

function ScannedIt() {
  return (
    <Svg label="ScannedIt">
      <path {...s} d="M9 15 v-4 a2 2 0 0 1 2 -2 h4" />
      <path {...s} d="M39 15 v-4 a2 2 0 0 0 -2 -2 h-4" />
      <path {...s} d="M9 33 v4 a2 2 0 0 0 2 2 h4" />
      <path {...s} d="M39 33 v4 a2 2 0 0 1 -2 2 h-4" />
      <path {...s} d="M16 22 h16 l-2 10 h-12 z" fill={soft} fillOpacity={0.35} />
      <line {...s} x1={13} y1={24} x2={35} y2={24} />
    </Svg>
  )
}

function Skippre() {
  return (
    <Svg label="Skippre">
      <circle {...s} cx={24} cy={24} r={16} fill={soft} fillOpacity={0.25} />
      <path {...s} d="M31 17 l-5 12 -9 5 5 -12 z" fill="var(--card)" />
      <circle cx={24} cy={24} r={1.6} fill="var(--ink)" />
    </Svg>
  )
}

function DocksBase() {
  return (
    <Svg label="DocksBase">
      <circle {...s} cx={24} cy={11} r={3.5} />
      <line {...s} x1={24} y1={15} x2={24} y2={40} />
      <line {...s} x1={17} y1={21} x2={31} y2={21} />
      <path {...s} d="M11 28 a13 13 0 0 0 26 0" fill={soft} fillOpacity={0.3} />
      <path {...s} d="M11 28 l-3 3 M11 28 l4 1 M37 28 l3 3 M37 28 l-4 1" />
    </Svg>
  )
}

function Starlit() {
  return (
    <Svg label="Starlit">
      <path {...s} d="M24 6 l5 12 13 1 -10 8 3 13 -11 -7 -11 7 3 -13 -10 -8 13 -1 z" fill={soft} fillOpacity={0.4} />
    </Svg>
  )
}

const PROJECT_ICONS: Record<IconKey, () => React.ReactElement> = {
  zetlar: Zetlar,
  groundtruth: GroundTruth,
  epaflow: EpaFlow,
  scannedit: ScannedIt,
  skippre: Skippre,
  docksbase: DocksBase,
  starlit: Starlit,
}

export function ProjectIcon({ icon }: { icon: IconKey }) {
  const Cmp = PROJECT_ICONS[icon]
  return <Cmp />
}

/* ---------------- Fun-fact icons ---------------- */

export function FactIcon({ icon }: { icon: 'cap' | 'briefcase' | 'heart' | 'trophy' }) {
  switch (icon) {
    case 'cap':
      return (
        <Svg>
          <path {...s} d="M6 18 L24 10 L42 18 L24 26 Z" fill={soft} fillOpacity={0.35} />
          <path {...s} d="M14 22 v9 c0 3 20 3 20 0 v-9" />
          <line {...s} x1={42} y1={18} x2={42} y2={28} />
        </Svg>
      )
    case 'briefcase':
      return (
        <Svg>
          <rect {...s} x={8} y={16} width={32} height={22} rx={4} fill={soft} fillOpacity={0.3} />
          <path {...s} d="M18 16 v-3 a2 2 0 0 1 2 -2 h8 a2 2 0 0 1 2 2 v3" />
          <line {...s} x1={8} y1={26} x2={40} y2={26} />
        </Svg>
      )
    case 'trophy':
      return (
        <Svg>
          <path {...s} d="M15 9 h18 v8 a9 9 0 0 1 -18 0 z" fill={soft} fillOpacity={0.35} />
          <path {...s} d="M15 12 h-5 a4 4 0 0 0 5 8 M33 12 h5 a4 4 0 0 1 -5 8" />
          <line {...s} x1={24} y1={26} x2={24} y2={33} />
          <path {...s} d="M17 39 h14 l-2 -6 h-10 z" />
        </Svg>
      )
    case 'heart':
      return (
        <Svg>
          <path
            {...s}
            d="M24 39 C10 29 8 20 14 15 c4 -3.5 8 -1 10 2 c2 -3 6 -5.5 10 -2 c6 5 4 14 -10 24 z"
            fill={soft}
            fillOpacity={0.35}
          />
        </Svg>
      )
  }
}

/* ---------------- UI icons ---------------- */

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"
        fill="var(--pink)"
        stroke="var(--ink)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <circle cx={12} cy={10} r={2.4} fill="var(--card)" stroke="var(--ink)" strokeWidth={2} />
    </svg>
  )
}

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-8 8M17 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5A10.5 10.5 0 0 0 8.7 22c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5z"
      />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM19 19h-3v-5.3c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.9 1.4 3.9 4.5V19z"
      />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" />
    </svg>
  )
}
