import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Megaphone, Users } from 'lucide-react'
import Link from 'next/link'

const involvementOptions = [
  {
    icon: Heart,
    title: 'Doações',
    description:
      'Com o seu apoio, podemos fornecer material de apoio, manter o centro de aprendizagem, capacitar professores e abrir portas para crianças carentes. Mesmo uma pequena contribuição pode fazer uma grande diferença.',
    color: 'bg-primary',
    href: '#doar',
  },
  {
    icon: Megaphone,
    title: 'Campanhas',
    description:
      'A arrecadação de fundos é uma das maneiras mais eficazes de apoiar nossa missão. Realizamos eventos, bazares, campanhas de arrecadação e muito mais. Fique ligado nas nossas redes sociais.',
    color: 'bg-accent',
    href: '#campanhas',
  },
  {
    icon: Users,
    title: 'Voluntários',
    description:
      'O voluntariado é mais do que doar seu tempo, é doar seu coração. Seja atendendo nossas crianças, ensinando-as, preparando os lanches ou auxiliando nos nossos eventos.',
    color: 'bg-chart-3',
    href: '#voluntario',
  },
]

export default function GetInvolved() {
  return (
    <section className='bg-muted/50 py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Seja um Parceiro
          </div>
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Como Você Pode Ajudar
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Existem diversas formas de fazer parte dessa transformação. Escolha
            a que mais combina com você.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {involvementOptions.map((option, index) => (
            <Card
              key={index}
              className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <CardContent className='p-8'>
                <div
                  className={`h-16 w-16 ${option.color} mb-6 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}
                >
                  <option.icon className='text-primary-foreground h-8 w-8' />
                </div>
                <h3 className='text-foreground mb-4 text-2xl font-bold'>
                  {option.title}
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  {option.description}
                </p>
                <Link
                  href={option.href}
                  className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'
                >
                  Saiba mais
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
