import { useEffect, useRef } from 'react'

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

export function useScrollReveal(revealedClassName: string, options?: Partial<IntersectionObserverInit>) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      if (el) el.classList.add(revealedClassName)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add(revealedClassName)
        })
      },
      { ...DEFAULT_OPTIONS, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [revealedClassName])

  return (node: HTMLElement | null) => {
    ref.current = node
  }
}
