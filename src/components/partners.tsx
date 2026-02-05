import Image from 'next/image'

export default function Partners() {
  return (
    <section id='apoiadores' className='bg-muted/50 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-foreground mt-4 text-3xl font-bold text-balance md:text-4xl'>
            Nossos Parceiros
          </h2>
          <p className='text-muted-foreground mx-auto mt-4 max-w-2xl'>
            Seja um parceiro e ajude a transformar vidas.
          </p>
        </div>

        {/* Sponsor Logos Block - Following Lei Rouanet Manual Guidelines */}
        <div className='rounded-2xl p-8 md:p-12'>
          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16'>
            {/* Lei de Incentivo à Cultura - Always first per manual guidelines */}
            <div className='shrink-0'>
              <Image
                src='/images/parceiros/cooper.png'
                alt='Logo Cooper'
                width={180}
                height={120}
                className='h-20 w-auto object-contain md:h-24'
              />
            </div>

            <div className='flex flex-wrap items-center justify-center gap-10 md:gap-16'>
              {/* CPA */}
              <div className='shrink-0'>
                <Image
                  src='/images/parceiros/cawahisa-logo.png'
                  alt='Logo Cawahisa'
                  width={280}
                  height={100}
                  className='h-16 w-auto object-contain'
                />
              </div>

              {/* Usina Santa Teresinha */}
              <div className='shrink-0'>
                <Image
                  src='/images/parceiros/olhos.png'
                  alt='Logo clinica de olhos'
                  width={400}
                  height={100}
                  className='h-20 w-auto object-contain'
                />
              </div>
            </div>

            {/* Ministério da Cultura + Governo do Brasil */}
            <div className='mt-4 shrink-0'>
              <Image
                src='/images/parceiros/itaipu.png'
                alt='Logo Itaipu'
                width={400}
                height={100}
                className='h-16 w-auto object-contain md:h-20'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
