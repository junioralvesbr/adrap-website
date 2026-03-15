import { Card, CardContent } from '@/components/ui/card'
import { voluntarios } from '@/config/voluntarios'
import Image from 'next/image'

export default function VolunteersBKP() {
  return (
    <section id='voluntarios' className='bg-background py-24'>
      <div className='container mx-auto px-4'>
        <header className='mb-16 text-center'>
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
        </header>

        <main>
          <section className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            {voluntarios.group1.map((voluntario, index) => (
              <Card
                key={index}
                className='bg-card group overflow-hidden border-0 py-0 shadow-lg transition-all duration-300 hover:shadow-xl'
              >
                <div className='relative aspect-square overflow-hidden'>
                  <Image
                    src={voluntario.image || '/placeholder.svg'}
                    alt={voluntario.name}
                    fill
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                    sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
                  />
                  <div className='from-foreground/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                </div>
                <CardContent className='p-5 text-center'>
                  <h3 className='text-foreground text-lg font-bold'>
                    {voluntario.name}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {voluntario.role}
                  </p>
                </CardContent>
              </Card>
            ))}

            {voluntarios.group2.map((voluntario, index) => (
              <Card
                key={index}
                className='bg-card group overflow-hidden border-0 py-0 shadow-lg transition-all duration-300 hover:shadow-xl'
              >
                <div className='relative aspect-square overflow-hidden'>
                  <Image
                    src={voluntario.image || '/placeholder.svg'}
                    alt={voluntario.name}
                    fill
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                    sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
                  />
                  <div className='from-foreground/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                </div>
                <CardContent className='p-5 text-center'>
                  <h3 className='text-foreground text-lg font-bold'>
                    {voluntario.name}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {voluntario.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className='mt-20 w-full'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='bg-secondary border-primary text-muted-foreground border-l-4 p-4 text-base italic md:text-lg'>
                &quot;Nossa Equipe de voluntarios se dedica de coração e alma
                para transformar a vida das nossas crianças.&quot;
              </h2>

              <div className='relative h-[250px] w-full sm:h-[350px] md:mt-10 md:h-[400px] lg:h-[500px]'>
                <Image
                  src='/images/voluntarios/voluntarios.jpg'
                  alt='Voluntarios da Adrap'
                  fill
                  sizes='(min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 480px) 480px, 100vw'
                  className='rounded-lg object-contain md:object-cover md:shadow-2xl'
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}
