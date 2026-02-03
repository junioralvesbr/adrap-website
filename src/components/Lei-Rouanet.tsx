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

            {/* Divider */}
            <div className='bg-border hidden h-16 w-px md:block' />

            {/* Ministério da Cultura + Governo do Brasil */}
            <div className='shrink-0'>
              <Image
                src='/images/rouanet/ministerio-cultura.png'
                alt='Ministério da Cultura - Governo do Brasil'
                width={400}
                height={100}
                className='h-16 w-auto object-contain md:h-20'
              />
            </div>
          </div>

          {/* Separator */}
          <div className='border-border my-10 border-t' />

          {/* Patrocinadores */}
          <div className='mb-8 text-center'>
            <span className='text-muted-foreground text-sm font-medium tracking-wider uppercase'>
              Patrocinio
            </span>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-10 md:gap-16'>
            {/* Itaipu Binacional */}
            <div className='shrink-0'>
              <Image
                src='/images/rouanet/CPA.png'
                alt='CPA'
                width={280}
                height={100}
                className='h-16 w-auto object-contain md:h-20'
              />
            </div>

            {/* CPA 25 Anos */}
            <div className='shrink-0'>
              <Image
                src='/images/rouanet/usacucar.png'
                alt='Usacucar usina santa terezinha'
                width={200}
                height={100}
                className='h-14 w-auto object-contain md:h-18'
              />
            </div>
          </div>

          {/* Separator */}
          <div className='border-border my-10 border-t' />

          {/* Realizacao */}
          <div className='mb-8 text-center'>
            <span className='text-muted-foreground text-sm font-medium tracking-wider uppercase'>
              Realizacao
            </span>
          </div>

          <div className='flex items-center justify-center'>
            {/* ADRAP Logo/Name */}
            <div className='text-center'>
              <div className='inline-flex items-center gap-3'>
                <Image
                  src='/logo.png'
                  alt='Usacucar usina santa terezinha'
                  width={200}
                  height={100}
                  className='h-14 w-auto object-contain md:h-18'
                />
                <div className='text-left'>
                  <span className='text-foreground text-xl font-bold'>
                    ADRAP
                  </span>
                  <p className='text-muted-foreground text-sm'>
                    Associacao das Ruas ao Palacio
                  </p>
                </div>
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
