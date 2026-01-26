'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Quem Somos' },
  { href: '#atividades', label: 'Atividades' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#voluntarios', label: 'Voluntários' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#contato', label: 'Contato' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-border fixed top-0 right-0 left-0 z-50 border-b bg-white backdrop-blur-md'>
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-between'>
          <Link href='/' className='flex items-center gap-3'>
            <div className='flex items-center justify-center rounded-full'>
              <Image src='/logo.jpg' alt='Logo' width={50} height={50} />
            </div>
            <div className='flex flex-col'>
              <span className='text-accent text-xl font-bold tracking-tight'>
                ADRAP
              </span>
              <span className='text-muted-foreground text-xs'>
                Das Ruas ao Palácio
              </span>
            </div>
          </Link>

          <nav className='hidden items-center gap-8 lg:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-foreground/80 hover:text-primary text-sm font-medium transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='hidden items-center gap-4 lg:flex'>
            <Button
              asChild
              className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6'
            >
              <Link href='#doar'>Doe Agora</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-foreground p-2 lg:hidden'
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        {isOpen && (
          <div className='border-border border-t py-4 lg:hidden'>
            <nav className='flex flex-col gap-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-foreground/80 hover:text-primary text-sm font-medium transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className='bg-primary hover:bg-primary/90 text-primary-foreground mt-2 rounded-full'
              >
                <Link href='#doar'>Doe Agora</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
