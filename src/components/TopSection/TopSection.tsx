import jaipurImg from '@/assets/jaipur.png'
import withloveImg from '@/assets/withlove.png'
import styles from './TopSection.module.css'

const PARAGRAPH_1 =
  'Dearest friends and family, we are so happy to welcome you to Jaipur to celebrate this very special time with us. Having you there means more than we can say.'

const PARAGRAPH_2 =
  "On this website, you'll find a little about Jaipur, details about our hotel, and a few nearby places you might enjoy exploring if you're arriving early or staying a little longer."

const PARAGRAPH_3 =
  "Most of all, we're simply looking forward to being together in a place that holds such deep meaning for us, and to sharing these memories with you."

export function TopSection() {
  return (
    <section className={styles.section}>
      <div className={styles.jaipurTitle}>
        <img src={jaipurImg} alt="Jaipur" />
      </div>
      <div className={styles.contentInner}>
        <p>{PARAGRAPH_1}</p>
        <div className={styles.divider} aria-hidden="true" />
        <p>{PARAGRAPH_2}</p>
        <div className={styles.divider} aria-hidden="true" />
        <p>{PARAGRAPH_3}</p>
        <div className={styles.withloveWrap}>
          <img src={withloveImg} alt="With love ~ Gulu & Veena" />
        </div>
      </div>
    </section>
  )
}
