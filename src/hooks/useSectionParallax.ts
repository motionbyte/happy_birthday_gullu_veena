import { useEffect, useRef, useCallback, type RefObject } from 'react'

const DEFAULT_RATE = 0.5

/**
 * Parallax that keeps the top of the layer visible when the section is in view.
 * Transform is 0 when section top hits viewport top, so background is not cut from top.
 */
export function useSectionParallax(
  sectionRef: RefObject<HTMLElement | null>,
  rate: number = DEFAULT_RATE
): (node: HTMLElement | null) => void {
  const layerRef = useRef<HTMLElement | null>(null)

  const update = useCallback(() => {
    const layer = layerRef.current
    const section = sectionRef.current
    if (!layer || !section) return

    const scrollY = window.scrollY
    const rect = section.getBoundingClientRect()
    const sectionTop = rect.top + scrollY

    const y = scrollY >= sectionTop ? (scrollY - sectionTop) * rate : 0
    layer.style.transform = `translateY(${y}px)`
  }, [sectionRef, rate])

  useEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  return (node: HTMLElement | null) => {
    layerRef.current = node
    update()
  }
}
