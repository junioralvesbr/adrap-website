import Image from 'next/image'

export default function LeiRouanet() {
  return (
    <section id='apoiadores' className='bg-muted/50 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <span className='text-primary text-sm font-semibold tracking-wider uppercase'>
            Projeto aprovado pela Lei Federal de Incentivo a Cultura
          </span>
          <h2 className='text-foreground mt-4 text-3xl font-bold text-balance md:text-4xl'>
            Nossos Apoiadores
          </h2>
          <p className='text-muted-foreground mx-auto mt-4 max-w-2xl'>
            Projeto realizado com recursos da Lei Federal de Incentivo à Cultura
            - Lei Rouanet - Ministério da Cultura - Governo Federal
          </p>
        </div>

        {/* Sponsor Logos Block - Following Lei Rouanet Manual Guidelines */}
        <div className='bg-background rounded-2xl p-8 shadow-xl md:p-12'>
          {/* Main Presentation Text */}
          <p className='text-foreground mb-10 text-center text-lg font-medium'>
            Ministério da Cultura, CPA e Usina Santa Teresinha apresentam:
          </p>

          {/* Logo Grid - Lei de Incentivo à Cultura always first (left) */}
          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16'>
            <div>
              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase'>
                Apoio
              </p>

              {/* Lei de Incentivo à Cultura - Always first per manual guidelines */}
              <div className='shrink-0'>
                <Image
                  src='/images/rouanet/incentivo-cultura.png'
                  alt='Lei de Incentivo à Cultura - Lei Rouanet'
                  width={180}
                  height={120}
                  className='h-20 w-auto object-contain md:h-24'
                />
              </div>
            </div>

            {/* Divider */}
            <div className='bg-border hidden h-16 w-px md:block' />

            <div>
              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase'>
                Patrocinio
              </p>

              <div className='flex flex-wrap items-center justify-center gap-10 md:gap-16'>
                {/* CPA */}
                <div className='shrink-0'>
                  <Image
                    src='/images/rouanet/CPA.png'
                    alt='CPA'
                    width={280}
                    height={100}
                    className='h-16 w-auto object-contain'
                  />
                </div>

                {/* Usina Santa Teresinha */}
                <div className='shrink-0'>
                  <Image
                    src='/images/rouanet/usacucar.png'
                    alt='Usacucar usina santa terezinha'
                    width={200}
                    height={100}
                    className='h-14 w-auto object-contain'
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className='bg-border hidden h-16 w-px md:block' />
            <div>
              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase'>
                Realização
              </p>
              {/* Ministério da Cultura + Governo do Brasil */}
              <div className='mt-4 shrink-0'>
                <Image
                  src='/images/rouanet/ministerio-cultura.png'
                  alt='Ministério da Cultura - Governo do Brasil'
                  width={400}
                  height={100}
                  className='h-16 w-auto object-contain md:h-20'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <p className='text-muted-foreground mx-auto mt-8 max-w-3xl text-center text-xs'>
          Este projeto foi aprovado pelo Ministerio da Cultura atraves do
          Programa Nacional de Apoio a Cultura (PRONAC), instituido pela Lei n
          8.313/91 (Lei Rouanet), que permite que empresas e pessoas fisicas
          invistam parte do Imposto de Renda em projetos culturais.
        </p>
      </div>
    </section>
  )
}
