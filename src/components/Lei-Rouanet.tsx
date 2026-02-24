import Image from 'next/image'

export default function LeiRouanet() {
  return (
    <section id='apoiadores' className='bg-muted/90 py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <span className='text-primary text-sm font-semibold tracking-wider uppercase'>
            Projeto aprovado pela Lei Federal de Incentivo a Cultura
          </span>
          <h2 className='text-foreground mt-4 text-3xl font-bold text-balance md:text-4xl'>
            Apoiadores
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
            {/* Lei de Incentivo à Cultura - Always first per manual guidelines */}
            <div className='relative h-28 w-48'>
              <Image
                src='/images/rouanet/incentivo-cultura.png'
                alt='Lei de Incentivo à Cultura - Lei Rouanet'
                fill
                className='object-contain'
              />

              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase md:text-left'>
                Apoio
              </p>
            </div>

            {/* Divider */}
            <div className='bg-border hidden h-16 w-px md:block' />

            {/* CPA */}
            <div className='relative h-28 w-48'>
              <Image
                src='/images/rouanet/CPA.png'
                alt='CPA'
                fill
                className='object-contain'
              />

              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase md:text-left'>
                Patrocinio
              </p>
            </div>

            {/* Usina Santa Teresinha */}
            <div className='relative h-20 w-48'>
              <Image
                src='/images/rouanet/usacucar.png'
                alt='Usacucar usina santa terezinha'
                fill
                className='object-contain'
              />
            </div>

            {/* Divider */}
            <div className='bg-border hidden h-16 w-px md:block' />

            {/* Ministério da Cultura + Governo do Brasil */}
            <div className='relative mt-4 h-28 w-68'>
              <Image
                src='/images/rouanet/ministerio-cultura.png'
                alt='Ministério da Cultura - Governo do Brasil'
                fill
                className='object-contain'
              />
              <p className='text-muted-foreground text-center text-sm font-bold tracking-wider uppercase md:text-left'>
                Realização
              </p>
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
