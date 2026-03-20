import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'
import { Menu } from '@/components/Menu'
import styles from './Header.module.css'

export type HeaderProps = {
  menuOpen: boolean
  onMenuOpen: () => void
  onMenuClose: () => void
  onHotelInfoClick?: () => void
  onExtendedTravelClick?: () => void
  onMessageUsClick?: () => void
  onBackClick?: () => void
}

export function Header({ menuOpen, onMenuOpen, onMenuClose, onHotelInfoClick, onExtendedTravelClick, onMessageUsClick, onBackClick }: HeaderProps) {
  const headerRef = useHeaderScroll(styles.scrolled)

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        {onBackClick ? (
          <button
            type="button"
            className={styles.backBtn}
            onClick={onBackClick}
            aria-label="Back"
          >
            <ArrowBackIcon sx={{ fontSize: 22 }} />
            Back
          </button>
        ) : (
          <span className={styles.headerSpacer} aria-hidden />
        )}
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Menu"
          onClick={onMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <Menu
        open={menuOpen}
        onClose={onMenuClose}
        onHotelInfoClick={onHotelInfoClick}
        onExtendedTravelClick={onExtendedTravelClick}
        onMessageUsClick={onMessageUsClick}
      />
    </>
  )
}
