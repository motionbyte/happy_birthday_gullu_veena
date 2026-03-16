import type { ExtendedTravelItem } from '../../types'
import styles from './TravelSection.module.css'

export type TravelSectionProps = ExtendedTravelItem

export function TravelSection({
  id,
  imageUrl,
  orientation,
  title,
  description,
  suggestions,
}: TravelSectionProps) {
  const sectionClass = orientation === 'right' ? `${styles.section} ${styles.orientationRight}` : styles.section
  const titleId = `travel-title-${id}`

  return (
    <section className={sectionClass} aria-labelledby={titleId}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt="" loading="lazy" />
      </div>
      <div className={styles.textWrap}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        <ul className={styles.descList}>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        {suggestions && suggestions.length > 0 && (
          <div className={styles.suggestionsWrap}>
            <span className={styles.suggestionsLabel}>Hotel suggestions:</span>
            <ul className={styles.suggestionsList}>
              {suggestions.map((hotel, i) => (
                <li key={i}>
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.suggestionLink}
                  >
                    {hotel.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
