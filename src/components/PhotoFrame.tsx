import { useState } from 'react'
import styles from './PhotoFrame.module.css'

type Ratio = 'portrait' | 'wide' | 'square'

interface PhotoFrameProps {
  src?: string
  alt: string
  /** shown under the photo in a handwritten font */
  caption?: string
  ratio?: Ratio
  /** rotation in degrees for the taped-in look */
  tilt?: number
  tape?: boolean
  /** short label shown in the empty placeholder, e.g. "team photo" */
  placeholderLabel?: string
  className?: string
}

/**
 * A framed, optionally taped-in photo. When `src` is missing or fails to
 * load, it renders a tidy dashed placeholder — so image slots look
 * intentional until the real photos are dropped into /public/photos.
 */
export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = 'wide',
  tilt = 0,
  tape = false,
  placeholderLabel = 'photo',
  className,
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false)
  const show = src && !failed

  return (
    <figure
      className={[styles.frame, styles[ratio], className].filter(Boolean).join(' ')}
      style={{ '--tilt': `${tilt}deg` } as React.CSSProperties}
    >
      {tape && <span className={styles.tape} aria-hidden="true" />}
      <div className={styles.window}>
        {show ? (
          <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={`${alt} (coming soon)`}>
            <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.phIcon}>
              <rect x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="17" cy="20" r="3.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M8 34 l10 -10 7 6 6 -7 9 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{placeholderLabel}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
