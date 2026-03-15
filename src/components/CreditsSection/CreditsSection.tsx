import styles from './CreditsSection.module.css'

const TAGLINE = 'Celebrating together in the place we love.'
const CLOSING = "We can't wait to share this day with you."
const CREDITS = 'Made with love'

export function CreditsSection() {
  const currentYear = new Date().getFullYear()

  return (
    <section className={styles.section} aria-label="Closing & credits">
      <div className={styles.inner}>
        <p className={styles.tagline}>{TAGLINE}</p>
        <p className={styles.closing}>{CLOSING}</p>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.credits}>
          {CREDITS}{' '}
          <a href="https://motionbyte.in" target="_blank" rel="noopener noreferrer">
            motionbyte.in
          </a>
        </p>
        <p className={styles.copyright}>© {currentYear}</p>
      </div>
    </section>
  )
}
