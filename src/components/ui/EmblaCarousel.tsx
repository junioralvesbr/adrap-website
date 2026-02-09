'use client'

import { EmblaOptionsType } from 'embla-carousel'
import AutoScroll, { AutoScrollOptionsType } from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Card, CardContent } from './card'

interface Slide {
  image?: string
  name: string
  role: string
}

export default function EmblaCarousel({
  slides,
  Options,
  reverse = false,
}: {
  slides: Slide[]
  Options?: EmblaOptionsType
  reverse?: boolean
}) {
  const [emblaRef] = useEmblaCarousel(Options, [
    AutoScroll({
      playOnInit: true,
      speed: reverse ? -0.4 : 0.4,
      stopOnInteraction: false,
    } as AutoScrollOptionsType),
  ])

  return (
    <section className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex py-6 md:py-8'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='cursor-grab pl-4 md:shrink-0 md:grow-0 md:basis-1/5'
            >
              <Card
                key={index}
                className='bg-card group min-h-62 overflow-hidden border-0 py-0 shadow-lg transition-all duration-300 hover:shadow-xl md:h-full md:w-full'
              >
                <div className='relative aspect-square h-42 overflow-hidden lg:h-full'>
                  <Image
                    src={slide.image || '/placeholder.svg'}
                    alt={slide.name}
                    fill
                    className='object-cover object-top transition-transform duration-500 group-hover:scale-110'
                    sizes='100vw'
                  />
                  <div className='from-foreground/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                </div>
                <CardContent className='p-2 text-center lg:p-5'>
                  <h3 className='text-foreground text-base font-bold'>
                    {slide.name}
                  </h3>
                  <p className='text-muted-foreground text-xs md:text-sm'>
                    {slide.role}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-linear-to-r from-white to-transparent md:block' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-linear-to-l from-white to-transparent md:block' />
    </section>
  )
}
