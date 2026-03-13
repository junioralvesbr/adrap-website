import { events } from '@/posts'
import { EventCategory } from '@/types/eventCategory'
import { EventData } from '@/types/eventData'

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug) as EventData
}

export function getAllEvents() {
  return events.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ) as EventData[]
}

export function getUpcomingEvents(limit?: number) {
  const now = new Date()
  const upcoming = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getPastEvents(limit?: number) {
  const now = new Date()
  const past = events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return limit ? past.slice(0, limit) : past
}

// Sistema de categorias/tags para filtros
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
  {
    slug: 'noticias',
    label: 'Notícias',
    color: 'bg-amber-800 text-white',
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
    noticias: 'Notícias',
  }

  const categoryName = categoryMap[categorySlug]
  return getAllEvents().filter((event) => event.category === categoryName)
}

export function getAllCategories(): EventCategory[] {
  return eventCategories
}
