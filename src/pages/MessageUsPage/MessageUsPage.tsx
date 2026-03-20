import { useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Header } from '@/components/Header'
import { CreditsSection } from '@/components/CreditsSection'
import styles from './MessageUsPage.module.css'

type FormData = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  message: '',
}

const initialErrors: FormErrors = {}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function MessageUsPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

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

  const validate = (data: FormData): FormErrors => {
    const nextErrors: FormErrors = {}
    if (!data.name.trim()) {
      nextErrors.name = 'Name is required'
    }
    if (!data.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email'
    }
    if (!data.message.trim()) {
      nextErrors.message = 'Message is required'
    }
    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formErrors = validate(formData)
    setErrors(formErrors)
    setStatus(null)

    if (Object.keys(formErrors).length > 0) {
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please add EmailJS environment keys.',
      })
      return
    }

    try {
      setIsSubmitting(true)
      const trimmedName = formData.name.trim()
      const trimmedEmail = formData.email.trim()
      const trimmedMessage = formData.message.trim()

      await emailjs.send(
        serviceId,
        templateId,
        {
          // Send common alias keys so different EmailJS templates work without remapping.
          from_name: trimmedName,
          from_email: trimmedEmail,
          name: trimmedName,
          user_name: trimmedName,
          email: trimmedEmail,
          user_email: trimmedEmail,
          message: trimmedMessage,
          user_message: trimmedMessage,
          reply_to: trimmedEmail,
          to_email: 'thepinkcity2026@gmail.com',
        },
        {
          publicKey,
        },
      )

      setFormData(initialForm)
      setErrors(initialErrors)
      setStatus({
        type: 'success',
        message: 'Message sent successfully. We will get back to you soon.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Could not send message right now. Please try again in a moment.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
        onBackClick={() => navigate('/')}
      />
      <div className={styles.page}>
        <main className={styles.content}>
          <h1 className={styles.title}>Message to Us</h1>
          <p className={styles.subtitle}>Share your message with us and we will receive it directly on email.</p>
          <section className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldWrap}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  name="name"
                  className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  disabled={isSubmitting}
                />
                {errors.name ? <span className={styles.errorText}>{errors.name}</span> : null}
              </div>

              <div className={styles.fieldWrap}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  disabled={isSubmitting}
                />
                {errors.email ? <span className={styles.errorText}>{errors.email}</span> : null}
              </div>

              <div className={styles.fieldWrap}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  disabled={isSubmitting}
                />
                {errors.message ? <span className={styles.errorText}>{errors.message}</span> : null}
              </div>

              <div className={styles.status} role="status">
                {status ? (
                  <span className={status.type === 'success' ? styles.success : styles.failure}>{status.message}</span>
                ) : null}
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>
        </main>
      </div>
      <CreditsSection />
    </>
  )
}
