import { EnterButton } from '@/components/EnterButton'
import styles from './PeacockSection.module.css'

export type PeacockSectionProps = {
  onEnterClick?: () => void
}

export function PeacockSection({ onEnterClick }: PeacockSectionProps) {
  return (
    <section className={styles.section} id="peacock-section">
      <EnterButton onEnterClick={onEnterClick} />
    </section>
  )
}
