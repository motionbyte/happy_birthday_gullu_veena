import type { ExtendedTravelItem } from '../types'
import delhiImg from '@/assets/extended_travel_images/delhi.png'
import agraImg from '@/assets/extended_travel_images/agra.webp'
import jodhpurImg from '@/assets/extended_travel_images/jodhpur.jpg'
import udaipurImg from '@/assets/extended_travel_images/udaipur.webp'

export const extendedTravelData: ExtendedTravelItem[] = [
  {
    id: 'delhi',
    imageUrl: delhiImg,
    orientation: 'left',
    title: 'Delhi',
    description: [
      'Old Delhi Exploration: Begin with a rickshaw ride through Chandni Chowk, visiting Jama Masjid and the bustling spice market for a sensory introduction to the city.',
      'Historic Monuments: Visit Humayun\'s Tomb, a UNESCO World Heritage site and architectural precursor to the Taj Mahal, followed by Qutub Minar and India Gate.',
      'Cultural Touchpoints: Explore Lodhi Art District for its vibrant murals or visit Gandhi Smriti for a moment of reflection.',
      'Modern Delhi: End the day in Connaught Place or Mehrauli, where boutique cafés and galleries blend seamlessly with history.',
    ],
    suggestions: [
      { name: 'The Oberoi New Delhi', url: 'https://www.oberoihotels.com/hotels-in-delhi/' },
      { name: 'Taj Dwarka', url: 'https://www.tajhotels.com/en-in/hotels/taj-dwarka-new-delhi/' },
    ],
    knowMoreUrl: '',
  },
  {
    id: 'agra',
    imageUrl: agraImg,
    orientation: 'right',
    title: 'Agra',
    description: [
      'Taj Mahal: Visit at sunrise for the most ethereal views.',
      'Agra Fort: Explore this red sandstone fortress that once housed Mughal emperors, offering panoramic views of the Taj.',
      'Itmad-ud-Daulah\'s Tomb: Often called the \'Baby Taj,\' this delicate marble mausoleum showcases intricate inlay work.',
      'Mehtab Bagh: Conclude with sunset views of the Taj Mahal from across the Yamuna River, a perfect photo opportunity.',
    ],
    suggestions: [
      { name: 'Oberoi Amar Villas', url: 'https://www.oberoihotels.com/hotels-in-agra/' },
      { name: 'ITC Mughal', url: 'https://www.itchotels.com/in/en/itc-mughal-agra' },
    ],
    knowMoreUrl: '',
  },
  {
    id: 'jodhpur',
    imageUrl: jodhpurImg,
    orientation: 'left',
    title: 'Jodhpur',
    description: [
      'Mehrangarh Fort: Towering above the city, this fort offers breathtaking views and fascinating exhibits of royal artifacts.',
      'Jaswant Thada: A serene marble cenotaph surrounded by gardens, ideal for a quiet interlude after the fort visit.',
      'Clock Tower & Sardar Market: Wander through stalls of spices, textiles, and antiques – a lively glimpse into local life.',
      'Rao Jodha Desert Rock Park: A scenic walk through restored desert landscapes beneath the fort\'s ramparts.',
      'Umaid Bhawan Palace museum: the residence to the Royals.',
    ],
    suggestions: [
      { name: 'Taj Umaid Bhawan Palace', url: 'https://www.tajhotels.com/en-in/hotels/umaid-bhawan-palace-jodhpur/' },
      { name: 'Taj Hari Mahal', url: 'https://www.tajhotels.com/en-in/hotels/taj-hari-mahal-jodhpur/' },
    ],
    knowMoreUrl: '',
  },
  {
    id: 'udaipur',
    imageUrl: udaipurImg,
    orientation: 'right',
    title: 'Udaipur',
    description: [
      'City Palace: Explore its ornate courtyards, museums, and terraces with sweeping views of Lake Pichola.',
      'Lake Pichola Boat Ride: A tranquil cruise past Jag Mandir and Taj Lake Palace, especially magical at sunset.',
      'Jagdish Temple: Visit this 17th-century temple known for its intricate carvings and spiritual ambiance.',
      'Saheliyon-ki-Bari: A peaceful garden built for royal maidens, featuring fountains and marble pavilions.',
      'Local Markets: Browse for miniature paintings, silver jewelry, and handwoven textiles in the old city lanes.',
    ],
    suggestions: [
      { name: 'Taj Lake Palace', url: 'https://www.tajhotels.com/en-in/hotels/taj-lake-palace-udaipur/' },
      { name: 'Leela Palace', url: 'https://www.theleela.com/hotels-in-udaipur/the-leela-palace-udaipur/' },
      { name: 'Trident', url: 'https://www.tridenthotels.com/hotels-in-udaipur/' },
    ],
    knowMoreUrl: '',
  },
]
