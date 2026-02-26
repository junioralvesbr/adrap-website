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

export const events: EventData[] = [
  {
    slug: 'campanha-union-solidaria-2026',
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
    coverImage: '/images/eventos/uniao-solidaria.jpg',
    description:
      'Apoie a ADRAP na campanha União Solidária e concorra a prêmios!',
    content: '',
    gallery: [],
  },
  {
    slug: 'volta-aulas-ingles',
    link: `eventos/volta-aulas-ingles`,
    title: 'Volta as aulas de inglês 2026',
    date: '2026-02-25',
    dateDisplay: {
      day: '25',
      month: 'Fev',
      year: '2026',
    },
    location: 'Sede da ADRAP',
    category: 'Notícias',
    coverImage:
      '/images/eventos/volta-aulas-ingles-25022026/volta-aula-ingles.jpg',
    description: 'Hoje tivemos a volta das aulas de inglês na ADRAP',
    content: `
## Sobre o Evento

É com grande entusiasmo que celebramos o retorno das aulas de inglês na ADRAP. Este novo semestre marca o início de uma jornada de aprendizado e descobertas para nossos alunos, que buscam no domínio de um novo idioma ferramentas essenciais para o seu desenvolvimento pessoal e profissional.

A primeira aula é um momento especial de acolhimento, onde os estudantes reencontram colegas e professores, conhecem o plano de ensino para 2026 e já começam a praticar a conversação em um ambiente dinâmico e interativo.



### O que esperar

- Nossos alunos reencontram colegas e professores
- Conhecem o plano de ensino para 2026
- Começam a praticar a conversação em um ambiente dinâmico e interativo

### Programação

| Horário | Atividade |
|---------|-----------|
| 19:00 | Inicio das Aulas |
| 20:00 | Fim das Aulas |

### Informações Importantes

As aulas são gratuitas e abertas ao público. Faça sua matrícula e venha aprender inglês com a gente!

> "O inglês é a chave para abrir portas e oportunidades. Na ADRAP, oferecemos um ensino de qualidade e acessível para todos." - Coordenação ADRAP
    `,
    gallery: [
      {
        src: '/images/eventos/volta-aulas-ingles-25022026/aula-ingles-1.jpeg',
        alt: 'Coral infantil em apresentação',
        size: 'large',
      },
      {
        src: '/images/eventos/volta-aulas-ingles-25022026/aula-ingles-2.jpeg',
        alt: 'Plateia emocionada',
        size: 'medium',
      },
      {
        src: '/images/eventos/volta-aulas-ingles-25022026/aula-ingles-3.jpeg',
        alt: 'Músicos em ação',
        size: 'medium',
      },
    ],
    // video: {
    //   type: 'youtube',
    //   id: 'dQw4w9WgXcQ',
    // },
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
