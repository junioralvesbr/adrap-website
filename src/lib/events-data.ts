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
  category: string
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

export const events: EventData[] = [
  {
    slug: 'cantata-de-natal-2025',
    link: `https://campanhauniaosolidaria.com.br/`,
    title: 'Campanha União solidaria - 2026',
    date: '2026-02-23',
    dateDisplay: {
      day: '23',
      month: 'Fev',
      year: '2026',
    },
    location: 'https://campanhauniaosolidaria.com.br/',
    category: 'Campanhas',
    coverImage: '/images/events/uniao-solidaria.jpg',
    description:
      'Apoie a ADRAP na campanha União Solidária e concorra a prêmios!',
    content: `
## Sobre o Evento

A **Cantata de Natal** é o evento mais esperado do ano na ADRAP. Nesta noite especial, nossos alunos do coral apresentam um repertório cuidadosamente preparado de canções natalinas que emocionam e encantam toda a comunidade.

### O que esperar

- Apresentação do coral infantil com mais de 50 crianças
- Repertório com clássicos natalinos brasileiros e internacionais
- Participação especial dos alunos de música instrumental
- Momento de confraternização com as famílias

### Programação

| Horário | Atividade |
|---------|-----------|
| 19:00 | Abertura dos portões |
| 19:30 | Início da apresentação |
| 21:00 | Confraternização |

### Informações Importantes

O evento é **gratuito e aberto ao público**. Traga sua família para celebrar conosco este momento especial de união e esperança.

> "A música tem o poder de transformar vidas e unir corações. Na Cantata de Natal, vemos isso acontecer de forma mágica." - Coordenação ADRAP
    `,
    gallery: [
      {
        src: '/images/events/cantata-natal-1.jpg',
        alt: 'Coral infantil em apresentação',
        size: 'large',
      },
      {
        src: '/images/events/cantata-natal-2.jpg',
        alt: 'Plateia emocionada',
        size: 'medium',
      },
      {
        src: '/images/events/cantata-natal-3.jpg',
        alt: 'Músicos em ação',
        size: 'medium',
      },
    ],
    video: {
      type: 'youtube',
      id: 'dQw4w9WgXcQ',
    },
  },
]

export function getEventBySlug(slug: string): EventData | undefined {
  return events.find((event) => event.slug === slug)
}

export function getAllEvents(): EventData[] {
  return events.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getUpcomingEvents(limit?: number): EventData[] {
  const now = new Date()
  const upcoming = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getPastEvents(limit?: number): EventData[] {
  const now = new Date()
  const past = events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return limit ? past.slice(0, limit) : past
}

// Sistema de categorias/tags para filtros
export interface EventCategory {
  slug: string
  label: string
  color: string
}

export const eventCategories: EventCategory[] = [
  { slug: 'todos', label: 'Todos', color: 'bg-foreground text-background' },
  {
    slug: 'campanhas',
    label: 'Campanhas',
    color: 'bg-green-600 text-white',
  },
  { slug: 'festival', label: 'Festival', color: 'bg-amber-500 text-white' },
  { slug: 'workshop', label: 'Workshop', color: 'bg-purple-600 text-white' },
  {
    slug: 'comemoracao',
    label: 'Comemoração',
    color: 'bg-rose-500 text-white',
  },
]

export function getCategoryBySlug(slug: string): EventCategory | undefined {
  return eventCategories.find((cat) => cat.slug === slug)
}

export function getEventsByCategory(categorySlug: string): EventData[] {
  if (categorySlug === 'todos') {
    return getAllEvents()
  }

  const categoryMap: Record<string, string> = {
    apresentacao: 'Apresentação',
    festival: 'Festival',
    workshop: 'Workshop',
    comemoracao: 'Comemoração',
  }

  const categoryName = categoryMap[categorySlug]
  return getAllEvents().filter((event) => event.category === categoryName)
}

export function getAllCategories(): EventCategory[] {
  return eventCategories
}
