/**
 * Theme tokens for Jaipur Happy Birthday app
 */
export const theme = {
  colors: {
    sky: '#cce0eb',
    skyEnd: '#e8d4d0',
    ink: '#1a1a1a',
    warm: '#2d2318',
    cream: '#faf8f5',
  },
  header: {
    scrolledBg: 'rgba(204, 224, 235, 0.95)',
  },
} as const

export type Theme = typeof theme
