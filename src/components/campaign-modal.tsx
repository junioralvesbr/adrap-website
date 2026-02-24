'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useEffectEvent, useState } from 'react'

export default function CampaignModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const onMount = useEffectEvent(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      // Bloqueia scroll do body para evitar reajuste da barra de endereço mobile
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    }, 800)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    return onMount()
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      // Restaura scroll do body
      document.body.style.overflow = ''
    }, 400)
  }

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-9999 flex items-center justify-center overflow-hidden p-3 sm:p-4'
      style={{
        transition: 'background-color 0.4s ease',
        backgroundColor: isAnimating
          ? 'rgba(0, 0, 0, 0.75)'
          : 'rgba(0, 0, 0, 0)',
        height: '100dvh',
        width: '100dvw',
        touchAction: 'none',
      }}
      onClick={handleClose}
    >
      {/* Container principal */}
      <div
        className='relative flex max-h-[95dvh] flex-col items-center gap-3 sm:gap-5'
        style={{
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'scale(1)' : 'scale(0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className='absolute -top-1 -right-1 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-gray-900 sm:-top-2 sm:-right-2 sm:h-9 sm:w-9 md:-top-3 md:-right-3 md:h-10 md:w-10'
          aria-label='Fechar modal'
        >
          <X className='h-4 w-4 sm:h-5 sm:w-5' />
        </button>

        {/* Brilho animado ao redor da foto */}
        <div className='relative'>
          <div
            className='absolute -inset-3 rounded-full sm:-inset-3 md:-inset-4'
            style={{
              background:
                'conic-gradient(from 0deg, #22c55e, #16a34a, #facc15, #f97316, #ef4444, #a855f7, #3b82f6, #22c55e)',
              animation: 'spin 4s linear infinite',
            }}
          />
          <div className='absolute -inset-1 rounded-full bg-white sm:-inset-1 md:-inset-2' />

          {/* Foto circular */}
          <div className='relative h-56 w-56 overflow-hidden rounded-full shadow-2xl sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96'>
            <Image
              src='/images/events/uniao-solidaria.jpg'
              alt='Campanha União Solidária - Participe e concorra a prêmios!'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* Texto e CTA */}
        <div className='flex max-w-sm flex-col items-center gap-2.5 text-center sm:max-w-sm sm:gap-3 md:max-w-md'>
          <h2 className='text-xl font-bold text-white drop-shadow-lg sm:text-xl md:text-3xl'>
            🎉 Campanha União Solidária
          </h2>
          <p className='text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-sm md:text-base'>
            A ADRAP está participando! Doe e concorra a{' '}
            <span className='font-semibold text-yellow-300'>
              prêmios incríveis
            </span>
            . Sua doação transforma vidas!
          </p>

          <a
            href='https://campanhauniaosolidaria.com.br/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative mt-1 inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg'
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            }}
          >
            <span className='absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <span className='relative'>Quero Participar!</span>
            <svg
              className='relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </a>

          <button
            onClick={handleClose}
            className='cursor-pointer text-sm text-white/50 transition-colors hover:text-white/80'
          >
            Agora não, obrigado
          </button>
        </div>
      </div>

      {/* Keyframes para a animação de rotação do gradiente */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
