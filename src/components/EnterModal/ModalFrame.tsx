import styles from './EnterModal.module.css'

type ModalFrameProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Ornate SVG frame for the Enter modal — Jaipur/peacock theme (warm, gold, teal accents).
 */
export function ModalFrame({ children, className }: ModalFrameProps) {
  return (
    <div className={`${styles.frameWrap} ${className ?? ''}`}>
      <svg
        className={styles.frameSvg}
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#b8860b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8b6914" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="frameInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#faf8f5" />
            <stop offset="100%" stopColor="#e8d4d0" />
          </linearGradient>
          <filter id="frameShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#2d2318" floodOpacity="0.2" />
          </filter>
        </defs>
        {/* Outer decorative border */}
        <rect x="8" y="8" width="404" height="504" rx="12" stroke="url(#frameGradient)" strokeWidth="3" fill="none" filter="url(#frameShadow)" className={styles.frameStroke} />
        {/* Corner flourishes */}
        <path d="M 24 48 L 48 24 L 72 48 L 48 72 Z" stroke="url(#frameGradient)" strokeWidth="1.5" fill="none" opacity="0.8" className={styles.cornerFlourish} />
        <path d="M 396 48 L 372 24 L 348 48 L 372 72 Z" stroke="url(#frameGradient)" strokeWidth="1.5" fill="none" opacity="0.8" className={styles.cornerFlourish} />
        <path d="M 396 472 L 372 496 L 348 472 L 372 448 Z" stroke="url(#frameGradient)" strokeWidth="1.5" fill="none" opacity="0.8" className={styles.cornerFlourish} />
        <path d="M 24 472 L 48 496 L 72 472 L 48 448 Z" stroke="url(#frameGradient)" strokeWidth="1.5" fill="none" opacity="0.8" className={styles.cornerFlourish} />
        {/* Inner content area (mask) */}
        <rect x="28" y="28" width="364" height="464" rx="8" fill="url(#frameInner)" className={styles.frameInner} />
      </svg>
      <div className={styles.frameContent}>
        {children}
      </div>
    </div>
  )
}
