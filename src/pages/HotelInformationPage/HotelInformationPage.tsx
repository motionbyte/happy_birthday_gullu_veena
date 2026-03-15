import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import page3Bg from '@/assets/page_3_bg.jpg'
import { Header } from '@/components/Header'
import { CreditsSection } from '@/components/CreditsSection'
import styles from './HotelInformationPage.module.css'

const OBEROI_LINK = 'https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/?utm_source=GMBlisting&utm_medium=organic'

export function HotelInformationPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

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
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${page3Bg})` }}
          aria-hidden
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Hotel Information</h1>
          <div className={styles.card}>
            <p>
              We are delighted to confirm that rooms have been reserved
              at The Oberoi Rajvilas, Jaipur for our upcoming celebration.
            </p>
            <p>
              A selection of Run of the House rooms has been held
              for our guests, with options including rooms featuring private gardens
              as well as those with private pools.
              Kindly contact Mr. Ankit Sharma at{' '}
              <a href="mailto:Ankit.Sharma2@oberoigroup.com" className={styles.emailLink}>
                Ankit.Sharma2@oberoigroup.com
              </a>
              {' '}to confirm your reservation and indicate your preferred room category.
            </p>
            <p>
              We very much look forward to
              welcoming you for what promises to be a
              truly special and memorable occasion.
            </p>
            <div className={styles.cardBtnWrap}>
            <a
              href={OBEROI_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clickBtn}
            >
              Click Here
            </a>
          </div>
          </div>
        </div>
      </div>
      <CreditsSection />
    </>
  )
}
