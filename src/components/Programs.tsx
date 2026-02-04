import { Card, CardContent } from '@/components/ui/card'
import { PROGRAM_LINKS } from '@/config/links'
import { ArrowRight, Disc, Music, Palette } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    icon: Music,
    title: 'Aulas de Música',
    description:
      'Aulas de violão, teclado, bateria, musicalização infantil e coral para desenvolver o talento musical das crianças.',
    image: '/images/programas/aula-musica.jpg',
    color: 'bg-blue-600',
    href: PROGRAM_LINKS.MUSICA,
  },
  {
    icon: Palette,
    title: 'Aulas de Artes',
    description:
      'Aulas de pintura, desenho e artesanato para estimular a criatividade e expressão artística.',
    image: '/images/programas/pintura.jpg',
    color: 'bg-red-600',
    href: PROGRAM_LINKS.AULAS_ARTE,
  },
  {
    icon: Disc,
    title: 'Apoio Educacional',
    description: 'Aulas de dança e inglês para desenvolvimento pessoal.',
    image: '/images/programas/education.png',
    color: 'bg-purple-600',
    href: PROGRAM_LINKS.APOIO_EDUCACIONAL,
  },
]

export default function Programs() {
  return (
    <section id='programas' className='bg-background py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Nossos Programas
          </div>
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Uma Missão: Futuros Brilhantes
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Nosso foco é oferecer desenvolvimento através da cultura e educação,
            proporcionando ferramentas para que as crianças alcancem seu
            potencial.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {programs.map((program, index) => (
            <Card
              key={index}
              className='bg-card group overflow-hidden border-0 py-0 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <Link href={program.href}>
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={program.image || '/placeholder.svg'}
                    alt={program.title}
                    fill
                    sizes='(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='from-foreground/60 absolute inset-0 bg-linear-to-t to-transparent' />
                  <div
                    className={`absolute bottom-4 left-4 h-14 w-14 ${program.color} flex items-center justify-center rounded-xl`}
                  >
                    <program.icon className='text-primary-foreground h-7 w-7' />
                  </div>
                </div>
                <CardContent className='p-6'>
                  <h3 className='text-foreground mb-3 text-xl font-bold'>
                    {program.title}
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                    {program.description}
                  </p>
                  <span className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'>
                    Ver mais
                    <ArrowRight className='h-4 w-4' />
                  </span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
