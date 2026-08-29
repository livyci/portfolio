import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** delay in ms before revealing, for gentle staggering */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
  id?: string
}

/**
 * Fades + lifts children into view once, when they scroll near the viewport.
 * Falls back to visible immediately when IntersectionObserver is unavailable;
 * `prefers-reduced-motion` is honored in CSS via the `.reveal` rules.
 */
export function Reveal({ children, delay = 0, className, as = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    let timer = 0
    let safety = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          window.clearTimeout(safety)
          timer = window.setTimeout(() => setShown(true), delay)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    // Safety net: never leave content stuck hidden if IO never fires
    // (unsupported, or the tab is rendered off-screen / never painted).
    safety = window.setTimeout(() => {
      io.disconnect()
      setShown(true)
    }, 2600)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
      window.clearTimeout(safety)
    }
  }, [delay])

  const Tag = as
  const cls = ['reveal', shown ? 'in' : '', className].filter(Boolean).join(' ')
  // callback ref: a fn taking the widest element type satisfies each intrinsic tag
  const attach = (el: HTMLElement | null) => {
    ref.current = el
  }
  return (
    <Tag ref={attach} id={id} className={cls}>
      {children}
    </Tag>
  )
}
