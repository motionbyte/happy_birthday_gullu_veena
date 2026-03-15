import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalFrame } from './ModalFrame'
import { Hotel as HotelIcon, Map as MapIcon, Close as CloseIcon } from '@mui/icons-material'
import styles from './EnterModal.module.css'

export type EnterModalProps = {
  open: boolean
  onClose: () => void
  onHotelInfo?: () => void
  onExtendedTravel?: () => void
}

const TITLE = 'Welcome to Jaipur'
const SUBTITLE = 'Choose where you’d like to begin'

export function EnterModal({ open, onClose, onHotelInfo, onExtendedTravel }: EnterModalProps) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleHotel = () => {
    onHotelInfo?.()
    onClose()
  }

  const handleTravel = () => {
    onExtendedTravel?.()
    onClose()
  }

  if (!open) return null

  const content = (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enter-modal-title"
    >
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon sx={{ fontSize: 22 }} />
        </button>
        <ModalFrame>
          <h2 id="enter-modal-title" className={styles.title}>{TITLE}</h2>
          <p className={styles.subtitle}>{SUBTITLE}</p>
          <div className={styles.buttons}>
            <button type="button" className={styles.optionBtn} onClick={handleHotel}>
              <span className={styles.iconWrap}>
                <HotelIcon sx={{ fontSize: 22 }} />
              </span>
              Hotel Information
            </button>
            <button type="button" className={styles.optionBtn} onClick={handleTravel}>
              <span className={styles.iconWrap}>
                <MapIcon sx={{ fontSize: 22 }} />
              </span>
              Extended Travel
            </button>
          </div>
        </ModalFrame>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
