export interface EventData {
  slug: string
  link: string
  title: string
  date: string
  dateDisplay: {
    day: string
    month: string
    year: string
  }
  location: string
  category:
    | 'Apresentação'
    | 'Festival'
    | 'Workshop'
    | 'Comemoração'
    | 'Campanhas'
    | 'Notícias'
  coverImage: string
  description: string
  content: string
  gallery: {
    src: string
    alt: string
    size?: 'small' | 'medium' | 'large'
  }[]
  video?: {
    type: 'youtube' | 'vimeo'
    id: string
  }
}
