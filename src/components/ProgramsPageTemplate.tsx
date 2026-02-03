'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CONTACT_LINKS } from '@/config/links'
import { Calendar, CheckCircle2, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CourseModule {
  title: string
  description: string
  image: string
  features: string[]
}

interface CoursePageTemplateProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  accentColor: string
  modules: CourseModule[]
  schedule: {
    days: string
    // time: string
    duration: string
    location: string
  }
  benefits: string[]
}

export function ProgramsPageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  accentColor,
  modules,
  schedule,
  benefits,
}: CoursePageTemplateProps) {
  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section */}
      <header className='relative flex min-h-[70vh] items-center pt-20'>
        <div className='absolute inset-0'>
          <Image
            src={heroImage || '/placeholder.svg'}
            alt={title}
            fill
            sizes='(min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 480px) 480px, 100vw'
            className='object-cover'
            priority
          />
          <div className='from-foreground/90 via-foreground/70 absolute inset-0 bg-linear-to-r to-transparent' />
        </div>

        <div className='relative container mx-auto px-4 py-20'>
          <div className='max-w-2xl'>
            <span
              className='mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{ backgroundColor: accentColor, color: 'white' }}
            >
              {subtitle}
            </span>
            <h1 className='mb-6 text-4xl font-bold text-balance text-white md:text-5xl lg:text-6xl'>
              {title}
            </h1>
            <p className='mb-8 text-lg leading-relaxed text-white/90 md:text-xl'>
              {description}
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button
                asChild
                size='lg'
                className='rounded-full px-8 text-white'
                style={{ backgroundColor: accentColor }}
              >
                <a href='#matricula'>Matricule-se Agora</a>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='rounded-full border-white/30 bg-white/10 px-8 text-white hover:bg-white/20 hover:text-white'
              >
                <a href='#modalidades'>Ver Modalidades</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Schedule Info Bar */}
      <main>
        <section
          className='border-border border-b py-6'
          style={{ backgroundColor: accentColor + '15' }}
        >
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16'>
              <div className='flex items-center gap-3'>
                <Calendar className='h-5 w-5' style={{ color: accentColor }} />
                <span className='text-foreground font-medium'>
                  {schedule.days}
                </span>
              </div>
              {/* <div className='flex items-center gap-3'>
                <Clock className='h-5 w-5' style={{ color: accentColor }} />
                <span className='text-foreground font-medium'>
                  {schedule.time}
                </span>
              </div> */}
              <div className='flex items-center gap-3'>
                <Users className='h-5 w-5' style={{ color: accentColor }} />
                <span className='text-foreground font-medium'>
                  {schedule.duration}
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='h-5 w-5' style={{ color: accentColor }} />
                <span className='text-foreground font-medium'>
                  {schedule.location}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id='modalidades' className='mx-auto max-w-6xl py-20'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto mb-16 max-w-3xl text-center'>
              <span
                className='mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold'
                style={{
                  backgroundColor: accentColor + '20',
                  color: accentColor,
                }}
              >
                Modalidades
              </span>
              <h2 className='text-foreground mb-4 text-3xl font-bold text-balance md:text-4xl'>
                Conheça Nossas Aulas
              </h2>
              <p className='text-muted-foreground text-lg'>
                Oferecemos diversas modalidades para desenvolver talentos e
                habilidades
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2'>
              {modules.map((module, index) => (
                <Card
                  key={index}
                  className='group overflow-hidden border-0 py-0 shadow-lg transition-shadow duration-300 hover:shadow-xl'
                >
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={module.image || '/placeholder.svg'}
                      alt={module.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    <div className='from-foreground/60 absolute inset-0 bg-linear-to-t to-transparent' />
                    <h3 className='absolute bottom-4 left-6 text-2xl font-bold text-white'>
                      {module.title}
                    </h3>
                  </div>
                  <CardContent className='p-6'>
                    <p className='text-muted-foreground mb-4'>
                      {module.description}
                    </p>
                    <ul className='space-y-2'>
                      {module.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center gap-2'>
                          <CheckCircle2
                            className='h-4 w-4 shrink-0'
                            style={{ color: accentColor }}
                          />
                          <span className='text-foreground text-sm'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='bg-muted/50 py-20 md:py-28'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
              <div>
                <span
                  className='mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold'
                  style={{
                    backgroundColor: accentColor + '20',
                    color: accentColor,
                  }}
                >
                  Por que participar?
                </span>
                <h2 className='text-foreground mb-6 text-3xl font-bold text-balance md:text-4xl'>
                  Benefícios para o Desenvolvimento
                </h2>
                <p className='text-muted-foreground mb-8 text-lg'>
                  Nossas aulas vão além do ensino técnico, promovendo o
                  desenvolvimento integral da criança.
                </p>
                <ul className='space-y-4'>
                  {benefits.map((benefit, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <div
                        className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full'
                        style={{ backgroundColor: accentColor }}
                      >
                        <CheckCircle2 className='h-4 w-4 text-white' />
                      </div>
                      <span className='text-foreground'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative'>
                <div
                  className='absolute -inset-4 rounded-3xl opacity-20'
                  style={{ backgroundColor: accentColor }}
                />
                <div className='bg-card relative rounded-2xl p-8 shadow-xl'>
                  <h3 className='text-foreground mb-2 text-2xl font-bold'>
                    Vagas Limitadas
                  </h3>
                  <p className='text-muted-foreground mb-6'>
                    Garanta sua vaga e faça parte dessa transformação
                  </p>
                  <div className='mb-6 space-y-4'>
                    <div className='border-border flex items-center justify-between border-b pb-4'>
                      <span className='text-muted-foreground'>
                        Idade mínima
                      </span>
                      <span className='text-foreground font-semibold'>
                        5 anos
                      </span>
                    </div>
                    <div className='border-border flex items-center justify-between border-b pb-4'>
                      <span className='text-muted-foreground'>
                        Vagas por turma
                      </span>
                      <span className='text-foreground font-semibold'>
                        15 alunos
                      </span>
                    </div>
                    <div className='border-border flex items-center justify-between border-b pb-4'>
                      <span className='text-muted-foreground'>Material</span>
                      <span className='text-foreground font-semibold'>
                        Incluso
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-muted-foreground'>
                        Investimento
                      </span>
                      <span
                        className='text-foreground font-semibold'
                        style={{ color: accentColor }}
                      >
                        Gratuito
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size='lg'
                    className='w-full rounded-full text-white'
                    style={{ backgroundColor: accentColor }}
                  >
                    <a href={CONTACT_LINKS.WHATSAPP} target='_blank'>
                      Fazer Matrícula
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Enrollment Section */}
        {/* <section
        id='matricula'
        className='relative overflow-hidden py-20 md:py-28'
      >
        <div
          className='absolute inset-0 opacity-10'
          style={{ backgroundColor: accentColor }}
        />
        <div className='relative container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-foreground mb-6 text-3xl font-bold text-balance md:text-4xl'>
              Pronto para Começar?
            </h2>
            <p className='text-muted-foreground mb-8 text-lg'>
              Preencha o formulário de matrícula e nossa equipe entrará em
              contato para confirmar sua vaga.
            </p>

            <Card className='border-0 shadow-xl'>
              <CardContent className='p-8'>
                <form className='space-y-6'>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div className='text-left'>
                      <label className='text-foreground mb-2 block text-sm font-medium'>
                        Nome do Responsável
                      </label>
                      <input
                        type='text'
                        className='border-border bg-background w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                        style={
                          {
                            '--tw-ring-color': accentColor,
                          } as React.CSSProperties
                        }
                        placeholder='Seu nome completo'
                      />
                    </div>
                    <div className='text-left'>
                      <label className='text-foreground mb-2 block text-sm font-medium'>
                        Nome do Aluno
                      </label>
                      <input
                        type='text'
                        className='border-border bg-background w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                        style={
                          {
                            '--tw-ring-color': accentColor,
                          } as React.CSSProperties
                        }
                        placeholder='Nome da criança'
                      />
                    </div>
                  </div>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div className='text-left'>
                      <label className='text-foreground mb-2 block text-sm font-medium'>
                        Telefone/WhatsApp
                      </label>
                      <input
                        type='tel'
                        className='border-border bg-background w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                        style={
                          {
                            '--tw-ring-color': accentColor,
                          } as React.CSSProperties
                        }
                        placeholder='(00) 00000-0000'
                      />
                    </div>
                    <div className='text-left'>
                      <label className='text-foreground mb-2 block text-sm font-medium'>
                        Idade do Aluno
                      </label>
                      <input
                        type='number'
                        className='border-border bg-background w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                        style={
                          {
                            '--tw-ring-color': accentColor,
                          } as React.CSSProperties
                        }
                        placeholder='Idade'
                        min='7'
                        max='17'
                      />
                    </div>
                  </div>
                  <div className='text-left'>
                    <label className='text-foreground mb-2 block text-sm font-medium'>
                      E-mail
                    </label>
                    <input
                      type='email'
                      className='border-border bg-background w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                      style={
                        {
                          '--tw-ring-color': accentColor,
                        } as React.CSSProperties
                      }
                      placeholder='seu@email.com'
                    />
                  </div>
                  <div className='text-left'>
                    <label className='text-foreground mb-2 block text-sm font-medium'>
                      Mensagem (opcional)
                    </label>
                    <textarea
                      className='border-border bg-background w-full resize-none rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none'
                      style={
                        {
                          '--tw-ring-color': accentColor,
                        } as React.CSSProperties
                      }
                      placeholder='Alguma informação adicional...'
                      rows={3}
                    />
                  </div>
                  <Button
                    type='submit'
                    size='lg'
                    className='w-full rounded-full py-6 text-lg text-white'
                    style={{ backgroundColor: accentColor }}
                  >
                    Enviar Matrícula
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

        {/* Footer */}
        <section className='border-border border-t py-8'>
          <div className='container mx-auto px-4 text-center'>
            <p className='text-muted-foreground'>
              ADRAP - Associação das Ruas ao Palácio | Transformando vidas
              através da cultura
            </p>
            <Link
              href='/'
              className='text-primary mt-2 inline-block hover:underline'
            >
              Voltar ao site principal
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
