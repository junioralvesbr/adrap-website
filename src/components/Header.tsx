import { Button } from '@/components/ui/button'
import { NAVIGATION_LINKS } from '@/config/links'
import { stats } from '@/config/stats'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import DonationModal from './donation-modal'

export default function Header() {
  return (
    <section
      id='inicio'
      className='relative flex min-h-screen overflow-hidden pt-20'
    >
      {/* Imagem de background */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero.jpg'
          alt='Crianças aprendendo musica e arte'
          fill
          className='object-cover'
          priority
        />

        <div className='from-foreground/90 via-foreground/70 to-foreground/40 absolute inset-0 bg-linear-to-r' />
      </div>

      {/* Textos */}
      <div className='relative z-10 container mx-auto px-4'>
        <div className='max-w-3xl'>
          <div className='bg-primary/20 text-primary-foreground mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm'>
            <span className='bg-accent h-2 w-2 animate-pulse rounded-full' />
            <span className='text-sm font-medium'>
              Transformando vidas através da cultura
            </span>
          </div>

          <h1 className='text-card mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-7xl'>
            <span className='block'>Pequenas Ações,</span>
            <span className='text-accent block'>Grandes Impactos</span>
          </h1>

          <p className='text-card/80 mb-8 max-w-xl text-lg leading-relaxed md:text-xl'>
            Desde 2018, a ADRAP transforma vidas de crianças através da música,
            arte, pintura e dança. Junte-se a nós nessa missão de levar cultura
            e esperança para quem mais precisa.{' '}
          </p>

          <div className='flex flex-col gap-4 sm:flex-row'>
            <DonationModal>
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground h-12 cursor-pointer rounded-full px-8 text-base font-semibold'>
                Doe Agora
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </DonationModal>

            <Button
              size='lg'
              asChild
              variant='outline'
              className='border-card/30 text-card hover:bg-card/10 hover:text-accent h-12 rounded-full bg-transparent px-8 text-base font-semibold'
            >
              <Link href={NAVIGATION_LINKS.VOLUNTARIOS}>
                <Play className='mr-2 h-5 w-5' />
                Seja um Voluntário
              </Link>
            </Button>
          </div>

          <div className='border-card/20 mt-12 mb-12 flex gap-8 border-t pt-8 sm:mb-0 sm:gap-12'>
            <div className='flex-1 sm:flex-0'>
              <p className='text-accent text-3xl font-bold'>{stats[1].value}</p>
              <p className='text-card/70 text-sm'>{stats[1].label}</p>
            </div>
            <div className='flex-1 sm:flex-0'>
              <p className='text-accent text-3xl font-bold'>{stats[2].value}</p>
              <p className='text-card/70 text-sm'>{stats[2].label}</p>
            </div>
            <div className='flex-1 sm:flex-0'>
              <p className='text-accent text-3xl font-bold'>{stats[3].value}</p>
              <p className='text-card/70 text-sm'>{stats[3].label}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Efeito degrade branco no bottom da página */}
      <div className='from-background absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent' />
    </section>
  )
}
