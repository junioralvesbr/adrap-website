import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { voluntarios } from '@/config/voluntarios'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Volunters() {
  return (
    <section id='voluntarios' className='bg-background py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Nossa Equipe
          </div>
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Nossos Voluntários
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Conheça as pessoas incríveis que dedicam seu tempo e amor para
            transformar a vida das nossas crianças.
          </p>
        </div>

        <div className='flex justify-end'>
          <Link
            href='/voluntarios'
            className='hover:text-primary flex items-center gap-2'
          >
            Todos os voluntários
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Link>
        </div>

        <EmblaCarousel
          slides={voluntarios.group1}
          Options={{
            dragFree: true,
            loop: true,
            align: 'start',
            direction: 'ltr',
          }}
        />
        <EmblaCarousel
          slides={voluntarios.group2}
          reverse={true}
          Options={{
            dragFree: true,
            loop: true,
            align: 'start',
            direction: 'ltr',
          }}
        />
      </div>
    </section>
  )
}
