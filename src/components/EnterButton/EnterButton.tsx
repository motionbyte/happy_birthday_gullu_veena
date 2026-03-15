import enterbuttonImg from '@/assets/enterbutton.png'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './EnterButton.module.css'

export type EnterButtonProps = {
  onEnterClick?: () => void
}

export function EnterButton({ onEnterClick }: EnterButtonProps) {
  const enterWrapRef = useScrollReveal(styles.revealed)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onEnterClick) {
      onEnterClick()
    } else {
      document.getElementById('peacock-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={enterWrapRef} className={styles.enterWrap}>
      <a href="#peacock-section" className={styles.enterBtn} onClick={handleClick} aria-label="Enter">
        <img src={enterbuttonImg} alt="Enter" />
      </a>
    </div>
  )
}
