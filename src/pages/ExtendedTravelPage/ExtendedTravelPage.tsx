import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header'
import { CreditsSection } from '@/components/CreditsSection'
import { TravelSection } from './components/TravelSection'
import { extendedTravelData } from './data/extendedTravelData'
import styles from './ExtendedTravelPage.module.css'

export function ExtendedTravelPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToHotelInfo = () => {
    setMenuOpen(false)
    navigate('/hotel-information')
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        onHotelInfoClick={goToHotelInfo}
        onExtendedTravelClick={() => setMenuOpen(false)}
        onBackClick={() => navigate('/')}
      />
      <div className={styles.page}>
        <main className={styles.content}>
          <h1 className={styles.pageTitle}>Extended Travel</h1>
          {extendedTravelData.map((item) => (
            <TravelSection key={item.id} {...item} />
          ))}
        </main>
      </div>
      <CreditsSection />
    </>
  )
}
