import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TopSection } from '@/components/TopSection'
import { PeacockSection } from '@/components/PeacockSection'
import { FrontBgParallaxLayer } from '@/components/FrontBgParallaxLayer'
import { CreditsSection } from '@/components/CreditsSection'
import { EnterModal } from '@/components/EnterModal'
import { useScrollEndClamp } from '@/hooks/useScrollEndClamp'

export function HomePage() {
  const navigate = useNavigate()
  const PARALLAX_RATE = 0.5
  const creditsSectionRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollEndClamp(creditsSectionRef)

  const goToHotelInfo = () => {
    setModalOpen(false)
    setMenuOpen(false)
    navigate('/hotel-information')
  }

  const goToExtendedTravel = () => {
    setModalOpen(false)
    setMenuOpen(false)
    navigate('/extended-travel')
  }

  const goToMessageUs = () => {
    setModalOpen(false)
    setMenuOpen(false)
    navigate('/message-us')
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        onHotelInfoClick={goToHotelInfo}
        onExtendedTravelClick={() => { setMenuOpen(false) }}
        onMessageUsClick={goToMessageUs}
      />
      <main>
        <TopSection />
        <FrontBgParallaxLayer rate={PARALLAX_RATE} />
        <PeacockSection onEnterClick={() => setModalOpen(true)} />
      </main>
      <div ref={creditsSectionRef}>
        <CreditsSection />
      </div>
      <EnterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onHotelInfo={goToHotelInfo}
        onExtendedTravel={goToExtendedTravel}
        onMessageUs={goToMessageUs}
      />
    </>
  )
}
