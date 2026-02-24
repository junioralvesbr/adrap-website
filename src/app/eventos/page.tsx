import { EventsFilter } from '@/components/events-filter'
import { Button } from '@/components/ui/button'
import { getAllCategories, getAllEvents } from '@/lib/events-data'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eventos | ADRAP',
  description:
    'Confira todos os eventos e apresentações da ADRAP. Venha prestigiar o talento dos nossos alunos.',
}

export default function EventosPage() {
  const events = getAllEvents()
  const categories = getAllCategories()

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className='bg-muted/50 relative overflow-hidden pt-32 pb-20'>
          <div className='absolute inset-0 opacity-5'>
            <div className='bg-primary absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl' />
            <div className='bg-accent absolute right-10 bottom-10 h-96 w-96 rounded-full blur-3xl' />
          </div>
          <div className='relative container mx-auto px-4'>
            <div className='mx-auto max-w-3xl text-center'>
              <div className='bg-primary/10 text-primary mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
                Agenda ADRAP
              </div>
              <h1 className='text-foreground mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl'>
                Nossos Eventos
              </h1>
              <p className='text-muted-foreground text-xl'>
                Acompanhe todas as apresentações, campanhas, festivais e
                celebrações da ADRAP. Venha prestigiar o talento dos nossos
                alunos e fazer parte dessa jornada.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid with Filter */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <EventsFilter events={events} categories={categories} />
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-primary py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-primary-foreground mb-6 text-3xl font-bold text-balance md:text-4xl'>
              Quer receber novidades sobre nossos eventos?
            </h2>
            <p className='text-primary-foreground/80 mx-auto mb-8 max-w-2xl text-lg'>
              Siga a ADRAP nas redes sociais e fique por dentro de todas as
              apresentações e novidades.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                asChild
                size='lg'
                variant='secondary'
                className='rounded-full px-8'
              >
                <Link
                  href='https://instagram.com/adrap.ong'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Seguir no Instagram
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full bg-transparent px-8'
              >
                <Link href='/#contato'>Entrar em contato</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}
