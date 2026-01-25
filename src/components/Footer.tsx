import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { href: '#sobre', label: 'Quem Somos' },
  { href: '#programas', label: 'Programas' },
  { href: '#voluntarios', label: 'Voluntários' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#doar', label: 'Doe Agora' },
]

const programs = [
  { href: '#', label: 'Curso de Música' },
  { href: '#', label: 'Curso de Pintura' },
  { href: '#', label: 'Curso de Dança' },
  { href: '#', label: 'Apoio Educacional' },
]

export default function Footer() {
  return (
    <footer id='contato' className='bg-foreground text-card pt-20 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <Link href='/' className='mb-6 flex items-center gap-3'>
              <div className='bg-primary flex h-12 w-12 items-center justify-center rounded-full'>
                <Heart className='text-primary-foreground h-6 w-6' />
              </div>
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
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-card/10 text-card hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-card/10 text-card hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href='https://youtube.com'
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
                <span className='text-card/70'>
                  Maringá, Paraná
                  <br />
                  Brasil
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='text-primary h-5 w-5 shrink-0' />
                <a
                  href='tel:+5544999999999'
                  className='text-card/70 hover:text-primary transition-colors'
                >
                  (44) 99999-9999
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='text-primary h-5 w-5 shrink-0' />
                <a
                  href='mailto:contato@adrap.ong.br'
                  className='text-card/70 hover:text-primary transition-colors'
                >
                  contato@adrap.ong.br
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
                href='#'
                className='text-card/50 hover:text-primary transition-colors'
              >
                Política de Privacidade
              </Link>
              <Link
                href='#'
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
