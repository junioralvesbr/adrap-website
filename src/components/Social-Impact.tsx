'use client'

import { atendimentos } from '@/config/atendimentos'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className='text-foreground text-4xl font-bold md:text-5xl'>
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function SocialImpact() {
  return (
    <section id='impacto' className='bg-muted/50 py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <div className='bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold'>
            Nosso Impacto
          </div>
          <h2 className='text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Impactos Sociais
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Acreditamos que toda criança merece a oportunidade de alcançar seu
            pleno potencial. É por isso que nossos programas se concentram em
            cultura que apoia a educação e desenvolvimento comunitário.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {atendimentos.map((stat, index) => (
            <div key={index} className='group text-center'>
              <div className='bg-primary/10 group-hover:bg-primary mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110'>
                <stat.icon className='text-primary group-hover:text-primary-foreground h-10 w-10 transition-colors' />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className='text-muted-foreground mt-2'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
