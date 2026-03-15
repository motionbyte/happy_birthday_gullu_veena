import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { HotelInformationPage } from '@/pages/HotelInformationPage'
import { ExtendedTravelPage } from '@/pages/ExtendedTravelPage'

const theme = createTheme({
  palette: {
    primary: { main: '#2d2318' },
  },
})

function App() {
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
