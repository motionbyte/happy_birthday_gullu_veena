import { useEffect, useRef, useCallback, type RefObject } from 'react'

/**
 * Returns max scroll Y so the bottom of the end element (e.g. credits section)
 * aligns with the bottom of the viewport. No scroll past this.
 * If no ref provided, uses document scrollHeight.
 */
function getMaxScrollY(endRef: RefObject<HTMLElement | null>): number {
  if (endRef?.current) {
    const rect = endRef.current.getBoundingClientRect()
    const max = window.scrollY + rect.bottom - window.innerHeight
    return Math.max(0, max)
  }
  const { scrollHeight } = document.documentElement
  const { innerHeight } = window
  return Math.max(0, scrollHeight - innerHeight)
}

/**
 * Clamps window scroll so it never goes past the end element.
 * Pass ref to the last section (e.g. credits) so scroll ends exactly when its bottom hits viewport bottom.
 */
export function useScrollEndClamp(endRef: RefObject<HTMLElement | null>) {
  const rafId = useRef<number | null>(null)
  const isClamping = useRef(false)

  const clamp = useCallback(() => {
    const max = getMaxScrollY(endRef)
    const y = window.scrollY
    if (y > max) {
      window.scrollTo(0, max)
    }
  }, [endRef])

  const scheduleClamp = useCallback(() => {
    if (rafId.current != null) return
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null
      clamp()
    })
  }, [clamp])

  useEffect(() => {
    const onScroll = () => {
      if (isClamping.current) return
      scheduleClamp()
    }

    const onWheel = (e: WheelEvent) => {
      const max = getMaxScrollY(endRef)
      const atBottom = window.scrollY >= max - 2
      if (atBottom && e.deltaY > 0) {
        e.preventDefault()
        isClamping.current = true
        window.scrollTo(0, max)
        requestAnimationFrame(() => {
          isClamping.current = false
        })
      }
    }

    const onResize = () => scheduleClamp()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', onResize)
    window.addEventListener('load', scheduleClamp)

    // Initial clamp after layout; again after load (images/fonts)
    const t = requestAnimationFrame(() => clamp())

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', scheduleClamp)
      cancelAnimationFrame(t)
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
    }
  }, [clamp, scheduleClamp, endRef])
}
