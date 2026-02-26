'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  size?: 'small' | 'medium' | 'large'
}

interface MasonryGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function MasonryGallery({
  images,
  className = '',
}: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const getSizeClass = (size?: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2'
      case 'medium':
        return 'col-span-2 row-span-1'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  const getAspectClass = (size?: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'large':
        return 'aspect-square'
      case 'medium':
        return 'aspect-video'
      default:
        return 'aspect-square'
    }
  }

  return (
    <>
      <div
        className={`grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-4 ${className}`}
      >
        {images.map((image, index) => (
          <button
            key={index}
            type='button'
            onClick={() => openLightbox(index)}
            className={`${getSizeClass(image.size)} group relative cursor-pointer overflow-hidden rounded-xl`}
          >
            <div className={`relative w-full ${getAspectClass(image.size)}`}>
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='bg-foreground/0 group-hover:bg-foreground/20 absolute inset-0 transition-colors duration-300' />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div className='bg-card/90 rounded-full p-3 backdrop-blur-sm'>
                  <svg
                    className='text-foreground h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className='bg-foreground/95 fixed inset-0 z-50 flex items-center justify-center'
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') goToPrevious()
            if (e.key === 'ArrowRight') goToNext()
          }}
          role='dialog'
          aria-modal='true'
          tabIndex={0}
        >
          {/* Close button */}
          <Button
            variant='ghost'
            size='icon'
            className='text-background hover:bg-background/20 absolute top-4 right-4 z-10'
            onClick={closeLightbox}
          >
            <X className='h-8 w-8' />
            <span className='sr-only'>Fechar galeria</span>
          </Button>

          {/* Navigation - Previous */}
          <Button
            variant='ghost'
            size='icon'
            className='text-background hover:bg-background/20 absolute left-4 z-10'
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className='h-10 w-10' />
            <span className='sr-only'>Foto anterior</span>
          </Button>

          {/* Image */}
          <div
            className='relative mx-4 h-[80vh] w-full max-w-5xl'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src || '/placeholder.svg'}
              alt={images[currentIndex].alt}
              fill
              className='object-contain'
            />
          </div>

          {/* Navigation - Next */}
          <Button
            variant='ghost'
            size='icon'
            className='text-background hover:bg-background/20 absolute right-4 z-10'
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className='h-10 w-10' />
            <span className='sr-only'>Próxima foto</span>
          </Button>

          {/* Counter */}
          <div className='text-background absolute bottom-4 left-1/2 -translate-x-1/2 text-sm'>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
