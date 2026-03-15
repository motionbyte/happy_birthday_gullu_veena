import { useEffect, useRef, useCallback } from 'react'

const DEFAULT_RATE = 0.5

export function useParallax(rate: number = DEFAULT_RATE): (node: HTMLElement | null) => void {
  const ref = useRef<HTMLElement | null>(null)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const y = window.scrollY * rate
    el.style.transform = `translateY(${y}px)`
  }, [rate])

  useEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [update])

  return (node: HTMLElement | null) => {
    ref.current = node
    update()
  }
}
