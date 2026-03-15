import frontbgImg from '@/assets/frontbg.png'
import { useParallax } from '@/hooks/useParallax'
import styles from './FrontBgParallaxLayer.module.css'

const DEFAULT_RATE = 0.5

export type FrontBgParallaxLayerProps = {
  /** Parallax speed (0–1). Default 0.5 = moves at half scroll speed */
  rate?: number
}

export function FrontBgParallaxLayer({ rate = DEFAULT_RATE }: FrontBgParallaxLayerProps) {
  const setLayerRef = useParallax(rate)

  return (
    <div ref={setLayerRef} className={styles.layer} aria-hidden="true">
      <img src={frontbgImg} alt="" className={styles.img} />
    </div>
  )
}
