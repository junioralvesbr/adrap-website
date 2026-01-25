import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  'Aulas de música: violão, teclado, guitarra e coral',
  'Cursos de pintura e artes visuais',
  'Aulas de dança e expressão corporal',
  'Apoio educacional e desenvolvimento pessoal',
]

export function About() {
  return (
    <section id='sobre' className='bg-background py-24'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          <div className='relative'>
            <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
              <Image
                src='/images/sobre.jpg'
                alt='Crianças em aula de música'
                width={600}
                height={500}
                className='h-[500px] w-full object-cover'
              />
            </div>
            <div className='bg-primary text-primary-foreground absolute -right-8 -bottom-8 hidden rounded-2xl p-8 shadow-xl md:block'>
              <p className='text-5xl font-bold'>2018</p>
              <p className='text-sm opacity-90'>Fundação</p>
            </div>
            <div className='bg-accent/20 absolute -top-4 -left-4 h-24 w-24 rounded-full blur-2xl' />
          </div>

          <div>
            <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
              Quem Somos
            </div>
            <h2 className='text-foreground mb-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
              Das Ruas ao Palácio: <br />
              <span className='text-primary'>Transformando Vidas</span>
            </h2>
            <p className='text-muted-foreground mb-6 text-lg leading-relaxed'>
              A ADRAP é uma organização sem fins lucrativos comprometida em
              capacitar crianças por meio do acesso à cultura de qualidade,
              através da música, pintura, arte e dança.
            </p>
            <p className='text-muted-foreground mb-8 leading-relaxed'>
              Desde 2018, ajudamos crianças no desenvolvimento de suas
              habilidades e capacidades sociais, proporcionando um ambiente
              acolhedor onde podem descobrir seus talentos e sonhar com um
              futuro melhor.
            </p>

            <ul className='mb-8 space-y-4'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                    <Check className='text-primary h-4 w-4' />
                  </div>
                  <span className='text-foreground'>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className='bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-full px-8'
            >
              <Link href='#programas'>
                Conheça nossos programas
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
