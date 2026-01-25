import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Disc, Music, Palette } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    icon: Music,
    title: 'Curso de Música',
    description:
      'Aulas de violão, teclado, guitarra e coral para desenvolver o talento musical das crianças.',
    image: '/images/music-class.jpg',
    color: 'bg-primary',
  },
  {
    icon: Palette,
    title: 'Curso de Pintura',
    description:
      'Aulas de pintura, desenho e artes visuais para estimular a criatividade e expressão artística.',
    image: '/images/painting-class.jpg',
    color: 'bg-accent',
  },
  {
    icon: Disc,
    title: 'Curso de Dança',
    description:
      'Aulas de dança e expressão corporal para desenvolver coordenação e autoconfiança.',
    image: '/images/dance-class.jpg',
    color: 'bg-chart-3',
  },
]

export default function Atividades() {
  return (
    <section id='atividades' className='bg-background py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Nossas Atividades
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
              className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <div className='relative h-64 overflow-hidden'>
                <Image
                  src={program.image || '/placeholder.svg'}
                  alt={program.title}
                  fill
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
                <Link
                  href='#contato'
                  className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'
                >
                  Ver mais
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
