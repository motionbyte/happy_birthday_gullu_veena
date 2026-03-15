export type TravelSectionOrientation = 'left' | 'right'

export type ExtendedTravelItem = {
  id: string
  imageUrl: string
  orientation: TravelSectionOrientation
  title: string
  description: string[]
  knowMoreUrl?: string
}
