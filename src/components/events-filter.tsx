'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { EventCategory, EventData } from '@/lib/events-data'
import { cn } from '@/lib/utils'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface EventsFilterProps {
  events: EventData[]
  categories: EventCategory[]
}

export function EventsFilter({ events, categories }: EventsFilterProps) {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredEvents =
    activeCategory === 'todos'
      ? events
      : events.filter((event) => {
          const categoryMap: Record<string, string> = {
            apresentacao: 'Apresentação',
            festival: 'Festival',
            workshop: 'Workshop',
            comemoracao: 'Comemoração',
            campanhas: 'Campanhas',
            noticias: 'Notícias',
          }
          return event.category === categoryMap[activeCategory]
        })

  return (
    <div>
      {/* Filter Tags */}
      <div className='mb-12 flex flex-wrap justify-center gap-3'>
        {categories.map((category) => {
          const isActive = activeCategory === category.slug
          return (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                'border-2 hover:scale-105 active:scale-95',
                isActive
                  ? `${category.color} border-transparent shadow-lg`
                  : 'border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent'
              )}
            >
              {category.label}
              {category.slug !== 'todos' && (
                <span
                  className={cn(
                    'ml-2 rounded-full px-2 py-0.5 text-xs',
                    isActive ? 'bg-white/20' : 'bg-muted'
                  )}
                >
                  {
                    events.filter((e) => {
                      const categoryMap: Record<string, string> = {
                        apresentacao: 'Apresentação',
                        festival: 'Festival',
                        workshop: 'Workshop',
                        comemoracao: 'Comemoração',
                        campanhas: 'Campanhas',
                        noticias: 'Notícias',
                      }
                      return e.category === categoryMap[category.slug]
                    }).length
                  }
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Events Grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card
              key={event.slug}
              className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl'
            >
              <CardContent className='p-0'>
                {/* Cover Image */}
                <div className='relative aspect-video overflow-hidden'>
                  <Image
                    src={event.coverImage || '/placeholder.svg'}
                    alt={event.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='from-foreground/60 absolute inset-0 bg-linear-to-t to-transparent' />

                  {/* Date Badge */}
                  <div className='bg-primary text-primary-foreground absolute top-4 left-4 rounded-lg px-4 py-2'>
                    <div className='text-2xl leading-none font-bold'>
                      {event.dateDisplay.day}
                    </div>
                    <div className='text-xs tracking-wider uppercase'>
                      {event.dateDisplay.month}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div
                    className={cn(
                      'absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-medium',
                      event.category === 'Apresentação' &&
                        'bg-blue-600 text-white',
                      event.category === 'Festival' &&
                        'bg-amber-500 text-white',
                      event.category === 'Workshop' &&
                        'bg-purple-600 text-white',
                      event.category === 'Comemoração' &&
                        'bg-rose-500 text-white',
                      event.category === 'Campanhas' &&
                        'bg-green-600 text-white',
                      event.category === 'Notícias' &&
                        'bg-amber-800 text-white',
                      ![
                        'Apresentação',
                        'Festival',
                        'Workshop',
                        'Comemoração',
                        'Campanhas',
                        'Notícias',
                      ].includes(event.category) &&
                        'bg-card/90 text-foreground backdrop-blur-sm'
                    )}
                  >
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h2 className='text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors'>
                    {event.title}
                  </h2>
                  <p className='text-muted-foreground mb-4 line-clamp-2'>
                    {event.description}
                  </p>
                  <div className='text-muted-foreground mb-4 flex items-center gap-2 text-sm'>
                    <MapPin className='text-primary h-4 w-4' />
                    <span>{event.location}</span>
                  </div>
                  <Button
                    asChild
                    variant='outline'
                    className='w-full rounded-full bg-transparent'
                  >
                    <Link href={event.link} target='_blank'>
                      Ver detalhes
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className='col-span-full py-16 text-center'>
            <div className='bg-muted mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full'>
              <MapPin className='text-muted-foreground h-10 w-10' />
            </div>
            <h3 className='text-foreground mb-2 text-xl font-semibold'>
              Nenhum evento encontrado
            </h3>
            <p className='text-muted-foreground mb-6'>
              Ainda nao temos eventos nesta categoria. Volte em breve!
            </p>
            <Button
              onClick={() => setActiveCategory('todos')}
              variant='outline'
              className='rounded-full bg-transparent'
            >
              Ver todos os eventos
            </Button>
          </div>
        )}
      </div>

      {/* Results count */}
      {filteredEvents.length > 0 && (
        <div className='text-muted-foreground mt-8 text-center'>
          Exibindo{' '}
          <span className='text-foreground font-semibold'>
            {filteredEvents.length}
          </span>{' '}
          {filteredEvents.length === 1 ? 'evento' : 'eventos'}
          {activeCategory !== 'todos' && (
            <>
              {' '}
              na categoria{' '}
              <span className='text-foreground font-semibold'>
                {categories.find((c) => c.slug === activeCategory)?.label}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  )
}
