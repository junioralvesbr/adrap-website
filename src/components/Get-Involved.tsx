import { Card, CardContent } from '@/components/ui/card'
import { NAVIGATION_LINKS } from '@/config/links'
import { ArrowRight, Heart, Megaphone, Users } from 'lucide-react'
import Link from 'next/link'
import DonationModal from './donation-modal'

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

        <section className='grid gap-8 md:grid-cols-3'>
          <Card className='bg-card group cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'>
            <DonationModal>
              <CardContent className='p-8'>
                <div className='bg-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110'>
                  <Heart className='text-primary-foreground h-8 w-8' />
                </div>
                <h3 className='text-foreground mb-4 text-2xl font-bold'>
                  Doações
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Com o seu apoio, podemos fornecer material de apoio, manter o
                  centro de aprendizagem, capacitar professores e abrir portas
                  para crianças carentes. Mesmo uma pequena contribuição pode
                  fazer uma grande diferença.
                </p>
                <span className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'>
                  Saiba mais
                  <ArrowRight className='h-4 w-4' />
                </span>
              </CardContent>
            </DonationModal>
          </Card>

          <Card className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'>
            <Link href={NAVIGATION_LINKS.EVENTOS}>
              <CardContent className='p-8'>
                <div className='bg-accent mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110'>
                  <Megaphone className='text-primary-foreground h-8 w-8' />
                </div>
                <h3 className='text-foreground mb-4 text-2xl font-bold'>
                  Campanhas
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  A arrecadação de fundos é uma das maneiras mais eficazes de
                  apoiar nossa missão. Realizamos eventos, bazares, campanhas de
                  arrecadação e muito mais. Fique ligado nas nossas redes
                  sociais.
                </p>
                <span className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'>
                  Saiba mais
                  <ArrowRight className='h-4 w-4' />
                </span>
              </CardContent>
            </Link>
          </Card>

          <Card className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'>
            <Link href={NAVIGATION_LINKS.VOLUNTARIOS}>
              <CardContent className='p-8'>
                <div className='bg-chart-3 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110'>
                  <Users className='text-primary-foreground h-8 w-8' />
                </div>
                <h3 className='text-foreground mb-4 text-2xl font-bold'>
                  Voluntários
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  O voluntariado é mais do que doar seu tempo, é doar seu
                  coração. Seja atendendo nossas crianças, ensinando-as,
                  preparando os lanches ou auxiliando nos nossos eventos.
                </p>
                <span className='text-primary inline-flex items-center gap-2 font-semibold transition-all hover:gap-3'>
                  Saiba mais
                  <ArrowRight className='h-4 w-4' />
                </span>
              </CardContent>
            </Link>
          </Card>
        </section>
      </div>
    </section>
  )
}
