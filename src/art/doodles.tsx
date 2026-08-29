/* Hand-drawn accent doodles — the "gezeichnet" feel without any stars. */

/** Wavy underline that stretches under a heading (place inside .underline-wrap). */
export function Underline() {
  return (
    <svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 8 Q 40 2 75 7 T 150 7 T 225 6 T 297 7"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** A curved hand-drawn arrow (points down-right by default). */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M12 16 C 40 10 78 28 82 66"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d="M68 60 L83 68 L86 51"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Small hand-drawn heart. */
export function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 41 C10 31 6 21 13 15 c5 -4 9 -1 11 3 c2 -4 6 -7 11 -3 c7 6 3 16 -11 26 z"
        fill="currentColor"
        stroke="var(--ink)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** A short scribbled divider. */
export function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 16" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M3 9 Q 20 2 33 9 T 63 9 T 93 8 T 117 9"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  )
}
