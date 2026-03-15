import type { ItineraryDay, ItineraryDayItem } from '../../data/itineraryData'
import { itineraryData } from '../../data/itineraryData'
import styles from './ItinerarySection.module.css'

const SECTION_TITLE = 'Possible itinerary for Guests'

function getMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function renderItem(item: ItineraryDayItem, index: number) {
  if (typeof item === 'string') {
    return <span key={index}>{item}</span>
  }
  return (
    <a
      key={index}
      href={getMapsUrl(item.mapsQuery)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.placeLink}
    >
      {item.text}
    </a>
  )
}

export function ItinerarySection() {
  return (
    <section className={styles.wrap} aria-labelledby="itinerary-heading">
      <h2 id="itinerary-heading" className={styles.title}>
        {SECTION_TITLE}
      </h2>
      <div className={styles.card}>
        {itineraryData.map(({ day, items }: ItineraryDay) => (
          <div key={day} className={styles.day}>
            <h3 className={styles.dayTitle}>Day {day}</h3>
            <p className={styles.dayItems}>
              {items.map((item, i) => renderItem(item, i))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
