import Image from 'next/image'

export default function Partners() {
  return (
    <section id='parceiros' className='bg-muted/50 py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-foreground mt-4 text-3xl font-bold text-balance md:text-4xl'>
            Nossos Parceiros
          </h2>
          <p className='text-muted-foreground mx-auto mt-4 max-w-2xl'>
            Nosso projeto é mantido por anjos que acreditam que as crianças é o
            futuro de nossa sociedade e por isso não medem esforços para nos
            ajudar a manter nossa estrutura e nossos professores.
          </p>
        </div>

        <div className='rounded-2xl bg-white p-8 shadow-xl md:p-12'>
          <div className='flex flex-wrap items-center justify-around gap-8 md:gap-12 lg:gap-16'>
            <div className='relative h-28 w-28'>
              <Image
                src='/images/parceiros/cooper.jpg'
                alt='Logo Cooper'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative h-28 w-28'>
              <Image
                src='/images/parceiros/cawahisa.jpg'
                alt='Logo Cawahisa'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative h-36 w-36'>
              <Image
                src='/images/parceiros/olhos.jpg'
                alt='Logo clinica de olhos'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative h-28 w-28'>
              <Image
                src='/images/parceiros/itaipu.png'
                alt='Logo Itaipu'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative h-28 w-28'>
              <Image
                src='/images/parceiros/criarkits.png'
                alt='Logo Criarkits'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative h-34 w-34'>
              <Image
                src='/images/parceiros/cnbb.png'
                alt='Logo Cnbb'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
