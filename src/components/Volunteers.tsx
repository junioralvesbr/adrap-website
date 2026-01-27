import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const volunteers = [
  {
    name: 'Icleya Martins',
    role: 'Diretora',
    image: '/images/voluntarios/voluntario-1.jpg',
  },
  {
    name: 'Carlos Alberto Cawahisa',
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

export default function Volunteers() {
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

        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {volunteers.map((volunteer, index) => (
            <Card
              key={index}
              className='bg-card group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <div className='relative aspect-square overflow-hidden'>
                <Image
                  src={volunteer.image || '/placeholder.svg'}
                  alt={volunteer.name}
                  fill
                  className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                  sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
                />
                <div className='from-foreground/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='absolute right-0 bottom-4 left-0 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <a
                    href='#'
                    className='bg-card text-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
                  >
                    {/* Facebook Icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-facebook-icon lucide-facebook h-5 w-5'
                    >
                      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-card text-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
                  >
                    {/* INstagram Icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-instagram-icon lucide-instagram h-5 w-5'
                    >
                      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-card text-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
                  >
                    {/* Linkedin Icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-linkedin-icon lucide-linkedin h-5 w-5'
                    >
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                      <rect width='4' height='12' x='2' y='9' />
                      <circle cx='4' cy='4' r='2' />
                    </svg>
                  </a>
                </div>
              </div>
              <CardContent className='p-5 text-center'>
                <h3 className='text-foreground text-lg font-bold'>
                  {volunteer.name}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {volunteer.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
