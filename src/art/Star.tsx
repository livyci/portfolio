export type StarFace = 'happy' | 'excited' | 'none'

interface StarProps {
  face?: StarFace
  className?: string
  title?: string
}

const STAR_PATH =
  'M50 6 C53 6 55 8 56 11 L64 33 L88 34 C94 34 96 41 92 45 L74 60 L80 84 C82 90 76 94 71 91 L50 78 L29 91 C24 94 18 90 20 84 L26 60 L8 45 C4 41 6 34 12 34 L36 33 L44 11 C45 8 47 6 50 6 Z'

/** The Starlit star, optionally with a cute face. */
export function Star({ face = 'happy', className, title }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path
        d={STAR_PATH}
        fill="var(--gold)"
        stroke="var(--gold-deep)"
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {face === 'happy' && (
        <>
          <circle cx={40} cy={46} r={3.2} fill="var(--ink)" />
          <circle cx={60} cy={46} r={3.2} fill="var(--ink)" />
          <circle cx={32} cy={55} r={4.5} fill="var(--pink)" opacity={0.75} />
          <circle cx={68} cy={55} r={4.5} fill="var(--pink)" opacity={0.75} />
          <path d="M41 56 Q50 65 59 56" fill="none" stroke="var(--ink)" strokeWidth={3} strokeLinecap="round" />
        </>
      )}
      {face === 'excited' && (
        <>
          <path d="M34 44 Q39 38 44 44" fill="none" stroke="var(--ink)" strokeWidth={3.2} strokeLinecap="round" />
          <path d="M56 44 Q61 38 66 44" fill="none" stroke="var(--ink)" strokeWidth={3.2} strokeLinecap="round" />
          <circle cx={30} cy={56} r={5} fill="var(--pink)" opacity={0.8} />
          <circle cx={70} cy={56} r={5} fill="var(--pink)" opacity={0.8} />
          <path d="M38 55 Q50 72 62 55 Q50 62 38 55 Z" fill="var(--ink)" />
          <path d="M44 63 Q50 68 56 63" fill="var(--pink)" />
        </>
      )}
    </svg>
  )
}

/** A plain little star outline used as a decorative sparkle. */
export function MiniStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M50 6 L64 36 L96 38 L70 60 L80 92 L50 74 L20 92 L30 60 L4 38 L36 36 Z"
        fill="var(--gold)"
        stroke="var(--gold-deep)"
        strokeWidth={4}
        strokeLinejoin="round"
      />
    </svg>
  )
}
