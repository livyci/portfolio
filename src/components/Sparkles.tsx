import { MiniStar } from '../art/Star'
import styles from './Sparkles.module.css'

// fixed scatter of decorative twinkling stars (top, left, size, delay)
const SPARKLES = [
  { top: '14%', left: '6%', size: 26, delay: 0 },
  { top: '24%', left: '92%', size: 18, delay: 1.2 },
  { top: '48%', left: '4%', size: 16, delay: 2.1 },
  { top: '62%', left: '95%', size: 22, delay: 0.6 },
  { top: '78%', left: '9%', size: 20, delay: 1.7 },
  { top: '88%', left: '88%', size: 15, delay: 2.6 },
  { top: '38%', left: '50%', size: 12, delay: 3.1 },
]

export function Sparkles() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className={styles.sparkle}
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
        >
          <MiniStar />
        </span>
      ))}
    </div>
  )
}
