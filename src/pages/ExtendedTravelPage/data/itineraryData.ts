export type ItineraryDayItem =
  | string
  | { text: string; mapsQuery: string }

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
      { text: 'The Oberoi New Delhi', mapsQuery: 'The Oberoi New Delhi Delhi' },
      ' / ',
      { text: 'Taj Dwarka', mapsQuery: 'Taj Dwarka New Delhi' },
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
    items: ['Departure to Jaipur.'],
  },
]
