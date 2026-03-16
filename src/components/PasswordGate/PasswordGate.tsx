import { useState, FormEvent } from 'react'
import styles from './PasswordGate.module.css'

const SITE_PASSWORD = 'Jaipur2026'

export type PasswordGateProps = {
  onUnlock: () => void
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    const trimmed = password.trim()
    if (trimmed === SITE_PASSWORD) {
      if (document.activeElement && (document.activeElement as HTMLElement).blur) {
        ;(document.activeElement as HTMLElement).blur()
      }
      onUnlock()
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className={styles.gate} role="dialog" aria-labelledby="password-gate-title" aria-describedby="password-gate-desc">
      <div className={styles.card}>
        <h1 id="password-gate-title" className={styles.title}>Welcome</h1>
        <p id="password-gate-desc" className={styles.subtitle}>Enter the password to access the site.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="password"
            className={`${styles.input} ${error ? styles.error : ''}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            autoComplete="current-password"
            aria-invalid={!!error}
            aria-describedby={error ? 'password-error' : undefined}
          />
          <button type="submit" className={styles.submitBtn}>
            Enter
          </button>
          {error && (
            <p id="password-error" className={styles.errorMsg} role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
