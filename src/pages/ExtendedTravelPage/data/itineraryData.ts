export type ItineraryDayItem =
  | string
  | { text: string; mapsQuery: string }
  | { text: string; url: string }

export type ItineraryDay = {
  day: number
  items: ItineraryDayItem[]
}

export const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    items: [
      'Arrival in New Delhi.',
      'Hotel options suggested: ',
      {
        text: 'Hyatt Regency New Delhi',
        url: 'https://www.hyatt.com/en-US/hotel/india/hyatt-regency-delhi/delrd',
      },
      ' / ',
      {
        text: 'The Leela Palace New Delhi',
        url: 'https://www.theleela.com/the-leela-palace-new-delhi',
      },
      '.',
    ],
  },
  {
    day: 2,
    items: [
      'Visit ',
      { text: 'Red Fort', mapsQuery: 'Red Fort Delhi' },
      ', ',
      { text: 'Jama Masjid', mapsQuery: 'Jama Masjid Delhi' },
      '.',
      ' Lunch.',
      ' Drive past Rashtrapati Bhavan, stop at ',
      { text: 'India Gate', mapsQuery: 'India Gate New Delhi' },
      '.',
      ' Dinner at ',
      { text: 'Bukhara', mapsQuery: 'Bukhara Delhi' },
      '.',
    ],
  },
  {
    day: 3,
    items: [
      'Visit ',
      { text: "Humayun's Tomb", mapsQuery: "Humayun's Tomb Delhi" },
      ' and ',
      { text: 'Qutub Minar', mapsQuery: 'Qutub Minar Delhi' },
      '.',
      ' Lunch.',
      ' Museum Tours / Shopping Markets.',
      ' Rooftop drinks/dinner overlooking Qutub Minar complex.',
    ],
  },
  {
    day: 4,
    items: [
      'Morning travel to Agra.',
      ' Check-in in the afternoon, visit ',
      { text: 'Agra Fort', mapsQuery: 'Agra Fort Agra' },
      '.',
      ' Visit ',
      { text: 'Mehtab Bagh', mapsQuery: 'Mehtab Bagh Agra' },
      '.',
      ' Dinner in hotel Sunrise TAJ.',
    ],
  },
  {
    day: 5,
    items: ['Sunrise at the Taj Mahal. Departure to Jaipur in the afternoon.'],
  },
]
