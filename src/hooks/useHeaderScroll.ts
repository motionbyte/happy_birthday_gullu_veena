import { useEffect, useRef, useCallback } from 'react'

const SCROLL_THRESHOLD = 80

export function useHeaderScroll(classNameWhenScrolled: string): (node: HTMLElement | null) => void {
  const ref = useRef<HTMLElement | null>(null)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const scrolled = window.scrollY > SCROLL_THRESHOLD
    el.classList.toggle(classNameWhenScrolled, scrolled)
  }, [classNameWhenScrolled])

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
