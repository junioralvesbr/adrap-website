import Image from 'next/image'

export default function Header() {
  return (
    <section className='relative min-h-screen'>
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

          <div className='border-card/20 mt-12 flex items-center gap-8 border-t pt-8'>
            <div>
              <p className='text-accent text-3xl font-bold'>120+</p>
              <p className='text-card/70 text-sm'>Crianças atendidas</p>
            </div>
            <div>
              <p className='text-accent text-3xl font-bold'>300+</p>
              <p className='text-card/70 text-sm'>Voluntários</p>
            </div>
            <div>
              <p className='text-accent text-3xl font-bold'>50+</p>
              <p className='text-card/70 text-sm'>Famílias impactadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
