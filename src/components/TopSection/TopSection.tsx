import jaipurImg from '@/assets/jaipur.png'
import withloveImg from '@/assets/withlove.png'
import styles from './TopSection.module.css'

const PARAGRAPH_1 =
  "We're so happy you're coming to Jaipur to celebrate this special milestone with us. On this website, you'll find a little about Jaipur, our hotel, and a few nearby places you might like to explore if you're arriving early or staying on."

const PARAGRAPH_2 =
  "More than anything, we're simply looking forward to being together — family, dear friends, and our YPO community — in a place that means so much to us."

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
        <div className={styles.withloveWrap}>
          <img src={withloveImg} alt="With love ~ Gulu & Veena" />
        </div>
      </div>
    </section>
  )
}
