import { Button } from '@/components/ui/button'
import { NAVIGATION_LINKS } from '@/config/links'
import Image from 'next/image'
import Link from 'next/link'

export default function Mission() {
  return (
    <section id='missao' className='relative overflow-hidden py-32'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/impact-bg.jpg'
          alt='Apresentação das crianças'
          fill
          className='object-cover'
        />
        <div className='bg-foreground/85 absolute inset-0' />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='bg-primary/20 text-primary-foreground mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm'>
            Nossa Missão
          </div>
          <h2 className='text-card mb-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
            Seja a Luz na Vida <br />
            <span className='text-accent'>Dessas Crianças</span>
          </h2>
          <p className='text-card/80 mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl'>
            Acreditamos que a cultura aliada à educação é uma ferramenta
            poderosa para gerar uma sociedade com mais valor. Nossa missão é
            fornecer às crianças o apoio, os recursos e a orientação de que
            precisam para crescer na sociedade e na vida.
          </p>

          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-full px-8'
            >
              <Link href={NAVIGATION_LINKS.DOAR}>Doe Agora</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-card/30 text-card hover:bg-card/10 h-14 rounded-full bg-transparent px-8'
            >
              <Link href={NAVIGATION_LINKS.VOLUNTARIOS}>
                Seja um Voluntário
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-card/30 text-card hover:bg-card/10 h-14 rounded-full bg-transparent px-8'
            >
              <Link href={NAVIGATION_LINKS.CAMPANHAS}>Apoie uma Campanha</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
