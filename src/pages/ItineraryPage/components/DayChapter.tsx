import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { ItineraryDay } from '../data/celebrationItinerary'
import styles from './DayChapter.module.css'

type DayChapterProps = {
  day: ItineraryDay
  reverse?: boolean
}

export function DayChapter({ day, reverse = false }: DayChapterProps) {
  const setRef = useScrollReveal(styles.revealed, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  return (
    <section
      ref={setRef}
      className={`${styles.chapter} ${reverse ? styles.reverse : ''} ${styles.reveal}`}
      aria-labelledby={`${day.id}-title`}
    >
      <div className={styles.visual}>
        <div className={styles.frame}>
          <img
            src={day.illustration}
            alt={day.illustrationAlt}
            className={styles.illustration}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <p className={styles.dayMark}>Day {day.dayNumber}</p>
          <h2 id={`${day.id}-title`} className={styles.theme}>
            {day.theme}
          </h2>
          <p className={styles.date}>{day.date}</p>
        </header>

        <ol className={styles.timeline}>
          {day.events.map((event) => (
            <li key={`${event.time}-${event.title}`} className={styles.event}>
              <div className={styles.timeCol}>
                <span className={styles.time}>{event.time}</span>
                {event.optionLabel ? (
                  <span className={styles.option}>{event.optionLabel}</span>
                ) : null}
              </div>
              <div className={styles.eventBody}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.place}>{event.place}</p>
                {event.note ? <p className={styles.note}>{event.note}</p> : null}
                <p className={styles.dress}>
                  <span className={styles.dressLabel}>Dress</span>
                  {event.dress}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
