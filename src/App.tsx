import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PasswordGate } from '@/components/PasswordGate'
import { HomePage } from '@/pages/HomePage'
import { HotelInformationPage } from '@/pages/HotelInformationPage'
import { ExtendedTravelPage } from '@/pages/ExtendedTravelPage'

const SESSION_KEY = 'site_access'

const theme = createTheme({
  palette: {
    primary: { main: '#2d2318' },
  },
})

function App() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(SESSION_KEY) === 'true')
  }, [])

  const handleUnlock = () => {
    sessionStorage.setItem(SESSION_KEY, 'true')
    setUnlocked(true)
  }

  if (!unlocked) {
    return (
      <ThemeProvider theme={theme}>
        <PasswordGate onUnlock={handleUnlock} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel-information" element={<HotelInformationPage />} />
          <Route path="/extended-travel" element={<ExtendedTravelPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
