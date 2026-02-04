import EmblaCarousel from './EmblaCarousel'

const volunteers = [
  {
    name: 'Icleya Martins',
    role: 'Diretora',
    image: '/images/voluntarios/voluntario-1.jpg',
  },
  {
    name: 'Carlos Cawahisa',
    role: 'Vice diretor e Professor de Música',
    image: '/images/voluntarios/voluntario-2.jpg',
  },
  {
    name: 'Lucimar',
    role: 'Voluntária',
    image: '/images/voluntarios/voluntario-3.jpg',
  },
  {
    name: 'Lucélia',
    role: 'Voluntária',
    image: '/images/voluntarios/voluntario-4.jpg',
  },
  {
    name: 'Marta',
    role: 'Voluntária',
    image: '/images/voluntarios/voluntario-5.jpg',
  },
  {
    name: 'Inês',
    role: 'Professora de Artes',
    image: '/images/voluntarios/voluntario-6.jpg',
    position: 'object-center',
  },
  {
    name: 'Marlene',
    role: 'Voluntária',
    image: '/images/voluntarios/voluntario-7.jpg',
  },
  {
    name: 'Rian',
    role: 'Voluntário',
    image: '/images/voluntarios/voluntario-8.jpg',
  },
]

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
        <EmblaCarousel
          slides={volunteers}
          Options={{
            dragFree: true,
            loop: true,
            align: 'start',
            direction: 'ltr',
          }}
        />
        {/* <EmblaCarousel
          slides={volunteers}
          reverse={true}
          Options={{
            dragFree: true,
            loop: true,
            align: 'start',
            direction: 'ltr',
          }}
        /> */}
      </div>
    </section>
  )
}
