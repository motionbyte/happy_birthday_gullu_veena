import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header'
import { CreditsSection } from '@/components/CreditsSection'
import heroImg from '@/assets/itinerary/hero.png'
import pageWashImg from '@/assets/itinerary/page_wash.png'
import ornamentSvg from '@/assets/itinerary/ornament.svg'
import jaipurImg from '@/assets/jaipur.png'
import { celebrationItinerary } from './data/celebrationItinerary'
import { DayChapter } from './components'
import styles from './ItineraryPage.module.css'

export function ItineraryPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToHotelInfo = () => {
    setMenuOpen(false)
    navigate('/hotel-information')
  }

  const goToExtendedTravel = () => {
    setMenuOpen(false)
    navigate('/extended-travel')
  }

  const goToMessageUs = () => {
    setMenuOpen(false)
    navigate('/message-us')
  }

  const goToItinerary = () => {
    setMenuOpen(false)
    navigate('/itinerary')
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        onHotelInfoClick={goToHotelInfo}
        onExtendedTravelClick={goToExtendedTravel}
        onMessageUsClick={goToMessageUs}
        onItineraryClick={goToItinerary}
        onBackClick={() => navigate('/')}
      />

      <div className={styles.page}>
        <div className={styles.painting} aria-hidden>
          <div
            className={styles.paintingHero}
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div
            className={styles.paintingWash}
            style={{ backgroundImage: `url(${pageWashImg})` }}
          />
          <div className={styles.paintingBlend} />
          <div className={styles.paintingVeil} />
        </div>

        <section className={styles.hero} aria-labelledby="itinerary-title">
          <div className={styles.heroContent}>
            <img src={jaipurImg} alt="Jaipur" className={styles.brand} />
            <p className={styles.eyebrow}>Three days in the Pink City</p>
            <h1 id="itinerary-title" className={styles.title}>
              Itinerary
            </h1>
            <img src={ornamentSvg} alt="" className={styles.ornament} aria-hidden />
            <p className={styles.lede}>
              A royal passage through blessing, discovery, craft and celebration.
              <span className={styles.ledeDates}>Monday 26 October — Wednesday 28 October</span>
            </p>
          </div>
        </section>

        <main className={styles.main}>
          <div className={styles.chapters}>
            {celebrationItinerary.map((day, index) => (
              <div key={day.id} className={styles.chapterBlock}>
                {index > 0 ? (
                  <img
                    src={ornamentSvg}
                    alt=""
                    className={styles.chapterOrnament}
                    aria-hidden
                  />
                ) : null}
                <DayChapter day={day} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>

          <aside className={styles.closing} aria-label="Closing note">
            <img src={ornamentSvg} alt="" className={styles.ornamentDark} aria-hidden />
            <p className={styles.closingText}>
              We look forward to sharing these days with you in Jaipur —
              with warmth, wonder, and a touch of the regal.
            </p>
          </aside>
        </main>
      </div>

      <CreditsSection />
    </>
  )
}
