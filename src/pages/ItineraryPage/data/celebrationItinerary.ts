import day1Img from '@/assets/itinerary/day1.png'
import day2Img from '@/assets/itinerary/day2.png'
import day3Img from '@/assets/itinerary/day3.png'

export type ItineraryEvent = {
  time: string
  title: string
  place: string
  dress: string
  note?: string
  optionLabel?: string
}

export type ItineraryDay = {
  id: string
  dayNumber: number
  date: string
  theme: string
  illustration: string
  illustrationAlt: string
  events: ItineraryEvent[]
}

export const celebrationItinerary: ItineraryDay[] = [
  {
    id: 'day-1',
    dayNumber: 1,
    date: 'October 26',
    theme: 'Arrival & welcome',
    illustration: day1Img,
    illustrationAlt: 'Evening temple blessing and villa terrace at dusk',
    events: [
      {
        time: '6:00–7:00 pm',
        title: 'Temple Blessing',
        place: 'The Oberoi Rajvilas',
        dress: 'Casual · Shoulders and knees respectfully covered',
      },
      {
        time: '7:00 pm onwards',
        title: 'Welcome Sundowner',
        place: 'Kohinoor Villa, The Oberoi Rajvilas',
        dress: 'Casual & relaxed',
      },
    ],
  },
  {
    id: 'day-2',
    dayNumber: 2,
    date: 'October 27',
    theme: 'Exploring Jaipur',
    illustration: day2Img,
    illustrationAlt: 'Amer Fort and City Palace of Jaipur',
    events: [
      {
        time: '8:00 am',
        optionLabel: 'Option 1',
        title: 'Private tour of Amer Fort',
        place: 'Followed by lunch at 1135 AD',
        dress: 'Comfortable clothing and trainers',
        note: 'Uphill walking · approximately 2–3 hours',
      },
      {
        time: '9:00 am',
        optionLabel: 'Option 2',
        title: 'Private tour of the City Palace',
        place: 'Followed by lunch at Baradari Restaurant',
        dress: 'Comfortable clothing and trainers',
        note: 'Approximately 2–3 hours',
      },
      {
        time: '4:00 pm',
        title: 'Afternoon Tea',
        place: 'The Oberoi Rajvilas',
        dress: 'Casual',
      },
      {
        time: '8:00 pm onwards',
        title: 'Dinner & Dancing',
        place: 'Once Upon a Time at Bagh',
        dress: 'Smart Casual',
      },
    ],
  },
  {
    id: 'day-3',
    dayNumber: 3,
    date: 'October 28',
    theme: 'Craft, Culture & Celebration',
    illustration: day3Img,
    illustrationAlt: 'Hawa Mahal, the Palace of Winds',
    events: [
      {
        time: 'Morning',
        optionLabel: 'Optional',
        title: 'Guided visit to Hawa Mahal',
        place: 'And the local bazaars',
        dress: 'Casual & comfortable',
      },
      {
        time: '1:00 pm',
        title: 'Lunch',
        place: 'Jai Mahal Palace',
        dress: 'Casual & comfortable',
      },
      {
        time: '3:00 pm',
        title: 'Private Block Printing Workshop',
        place: 'Nila House',
        dress: 'Casual & comfortable',
      },
      {
        time: '8:00 pm',
        title: 'Celebration Dinner',
        place: 'Raj Mahal Palace',
        dress: 'Regal',
      },
    ],
  },
]
