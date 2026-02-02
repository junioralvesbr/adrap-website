import {
  CONTACT_LINKS,
  LEGAL_LINKS,
  NAVIGATION_LINKS,
  PROGRAM_LINKS,
  SOCIAL_LINKS,
} from '@/config/links'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { href: NAVIGATION_LINKS.SOBRE, label: 'Quem Somos' },
  { href: NAVIGATION_LINKS.PROGRAMAS, label: 'Programas' },
  { href: NAVIGATION_LINKS.VOLUNTARIOS, label: 'Voluntários' },
  // { href: NAVIGATION_LINKS.EVENTOS, label: 'Eventos' },
  { href: NAVIGATION_LINKS.DOAR, label: 'Doe Agora' },
]

const programs = [
  { href: PROGRAM_LINKS.MUSICA, label: 'Aulas de Música' },
  { href: PROGRAM_LINKS.AULAS_ARTE, label: 'Aulas de Arte' },
  { href: PROGRAM_LINKS.APOIO_EDUCACIONAL, label: 'Apoio Educacional' },
]

export default function Footer() {
  return (
    <footer id='contato' className='bg-foreground text-card pt-20 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <Link
              href={NAVIGATION_LINKS.HOME}
              className='mb-6 flex items-center gap-3'
            >
              <div className='flex flex-col'>
                <span className='text-card text-xl font-bold tracking-tight'>
                  ADRAP
                </span>
                <span className='text-card/70 text-xs'>
                  Das Ruas ao Palácio
                </span>
              </div>
            </Link>
            <p className='text-card/70 mb-6 leading-relaxed'>
              Nossa organização acredita que trabalhando juntos, podemos
              transformar mais vidas do que nunca.
            </p>
            <div className='flex gap-4'>
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-card/10 text-card hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-card/10 text-card hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href={SOCIAL_LINKS.YOUTUBE}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-card/10 text-card hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
              >
                <Youtube className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-card mb-6 text-lg font-bold'>Links Rápidos</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-card/70 hover:text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-card mb-6 text-lg font-bold'>
              Nossos Programas
            </h3>
            <ul className='space-y-3'>
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-card/70 hover:text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-card mb-6 text-lg font-bold'>Contato</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <MapPin className='text-primary mt-1 h-5 w-5 shrink-0' />
                <a href={CONTACT_LINKS.MAPS} target='_blank'>
                  <span className='text-card/70 hover:text-primary transition-colors'>
                    Sarandi, Paraná
                    <br />
                    Brasil
                  </span>
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='text-primary h-5 w-5 shrink-0' />
                <a
                  href={`tel:${CONTACT_LINKS.PHONE}`}
                  className='text-card/70 hover:text-primary transition-colors'
                  target='_blank'
                >
                  {CONTACT_LINKS.PHONE}
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='text-primary h-5 w-5 shrink-0' />
                <a
                  href={`mailto:${CONTACT_LINKS.EMAIL}`}
                  className='text-card/70 hover:text-primary transition-colors'
                  target='_blank'
                >
                  {CONTACT_LINKS.EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-card/10 border-t pt-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-card/50 text-sm'>
              Copyright 2025 ADRAP - Associação das Ruas ao Palácio. Todos os
              direitos reservados.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link
                href={LEGAL_LINKS.PRIVACY_POLICY}
                className='text-card/50 hover:text-primary transition-colors'
              >
                Política de Privacidade
              </Link>
              <Link
                href={LEGAL_LINKS.TERMS_OF_USE}
                className='text-card/50 hover:text-primary transition-colors'
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
