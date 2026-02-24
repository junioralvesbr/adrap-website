import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllEvents } from '@/lib/events-data'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Events() {
  const events = getAllEvents().slice(0, 3)

  return (
    <section id='eventos' className='bg-muted/50 py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Agenda
          </div>
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Eventos e Campanhas
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Participe dos nossos eventos !!
          </p>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            fique por dentro e veja as novidades do nosso projeto.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {events.map((event) => (
            <Link key={event.slug} href={event.link}>
              <Card className='bg-card group h-full overflow-hidden border-0 p-0 shadow-lg transition-all duration-500 hover:shadow-2xl'>
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
                    <div className='bg-card/90 text-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm'>
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <h3 className='text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors'>
                      {event.title}
                    </h3>
                    <p className='text-muted-foreground mb-3 line-clamp-2 text-sm'>
                      {event.description}
                    </p>
                    <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                      <MapPin className='text-primary h-4 w-4' />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button
            asChild
            variant='outline'
            className='h-12 rounded-full bg-transparent px-8'
          >
            <Link href='/eventos'>
              Ver todos os eventos
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
