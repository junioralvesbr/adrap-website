import { MasonryGallery } from '@/components/masonry-gallery'
import { Button } from '@/components/ui/button'
import { VideoEmbed } from '@/components/video-embed'
import { getAllEvents, getEventBySlug } from '@/lib/events-data'
import { MarkdownRenderer } from '@/lib/markdown'
import { ArrowLeft, CalendarDays, MapPin, Share2 } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = getAllEvents()
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {
      title: 'Evento não encontrado | ADRAP',
    }
  }

  return {
    title: `${event.title} | ADRAP`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.coverImage],
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <main>
      {/* Hero Section with Cover Image */}
      <section className='relative flex h-[60vh] min-h-125 items-end'>
        <Image
          src={event.coverImage || '/placeholder.svg'}
          alt={event.title}
          fill
          className='object-cover object-top'
          priority
        />
        <div className='from-foreground via-foreground/50 absolute inset-0 bg-linear-to-t to-transparent' />

        <div className='relative container mx-auto px-4 pt-32 pb-12'>
          {/* Back Button */}
          <Link
            href='/eventos'
            className='text-background/80 hover:text-background mb-6 inline-flex items-center transition-colors'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Voltar para eventos
          </Link>

          {/* Event Info */}
          <div className='mb-4 flex flex-wrap gap-4'>
            <span className='bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-semibold'>
              {event.category}
            </span>
            <span className='bg-background/20 text-background rounded-full px-4 py-1 text-sm backdrop-blur-sm'>
              {event.dateDisplay.day} de {event.dateDisplay.month},{' '}
              {event.dateDisplay.year}
            </span>
          </div>

          <h1 className='text-background mb-4 text-4xl font-bold text-balance md:text-5xl lg:text-6xl'>
            {event.title}
          </h1>

          <div className='text-background/80 flex flex-wrap items-center gap-6'>
            <div className='flex items-center gap-2'>
              <CalendarDays className='h-5 w-5' />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='h-5 w-5' />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-12 lg:grid-cols-3'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              {/* Description */}
              <div className='bg-card mb-8 rounded-2xl p-8 shadow-lg'>
                <p className='text-muted-foreground mb-8 text-xl leading-relaxed'>
                  {event.description}
                </p>
                <MarkdownRenderer content={event.content} />
              </div>

              {/* Video Section */}
              {event.video && (
                <div className='mb-8'>
                  <h2 className='text-foreground mb-6 text-2xl font-bold'>
                    Video do Evento
                  </h2>
                  <VideoEmbed
                    type={event.video.type}
                    id={event.video.id}
                    title={event.title}
                  />
                </div>
              )}

              {/* Gallery Section */}
              {event.gallery && event.gallery.length > 0 && (
                <div>
                  <h2 className='text-foreground mb-6 text-2xl font-bold'>
                    Galeria de Fotos
                  </h2>
                  <MasonryGallery images={event.gallery} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                {/* Event Details Card */}
                <div className='bg-card rounded-2xl p-6 shadow-lg'>
                  <h3 className='text-foreground mb-4 text-lg font-bold'>
                    Detalhes do Evento
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <CalendarDays className='text-primary mt-0.5 h-5 w-5' />
                      <div>
                        <div className='text-foreground font-medium'>Data</div>
                        <div className='text-muted-foreground text-sm'>
                          {formatDate(event.date)}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <MapPin className='text-primary mt-0.5 h-5 w-5' />
                      <div>
                        <div className='text-foreground font-medium'>Local</div>
                        <div className='text-muted-foreground text-sm'>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Card */}
                <div className='bg-card rounded-2xl p-6 shadow-lg'>
                  <h3 className='text-foreground mb-4 text-lg font-bold'>
                    Compartilhar
                  </h3>
                  <p className='text-muted-foreground mb-4 text-sm'>
                    Ajude a divulgar este evento compartilhando com seus amigos!
                  </p>
                  <Button
                    variant='outline'
                    className='w-full rounded-full bg-transparent'
                  >
                    <Share2 className='mr-2 h-4 w-4' />
                    Compartilhar evento
                  </Button>
                </div>

                {/* CTA Card */}
                <div className='bg-primary rounded-2xl p-6 shadow-lg'>
                  <h3 className='text-primary-foreground mb-2 text-lg font-bold'>
                    Quer participar?
                  </h3>
                  <p className='text-primary-foreground/80 mb-4 text-sm'>
                    Entre em contato para mais informações sobre ingressos e
                    participação.
                  </p>
                  <Button
                    asChild
                    variant='secondary'
                    className='w-full rounded-full'
                  >
                    <Link href='/#contato'>Entrar em contato</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events CTA */}
      <section className='bg-muted/50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-foreground mb-4 text-3xl font-bold'>
            Veja mais eventos
          </h2>
          <p className='text-muted-foreground mb-8'>
            Confira todos os eventos e apresentações da ADRAP.
          </p>
          <Button asChild size='lg' className='rounded-full px-8'>
            <Link href='/eventos'>Ver todos os eventos</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
