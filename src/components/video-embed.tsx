'use client'

import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface VideoEmbedProps {
  type: 'youtube' | 'vimeo'
  id: string
  title?: string
}

export function VideoEmbed({ type, id, title = 'Video' }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getThumbnail = () => {
    if (type === 'youtube') {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    }
    return ''
  }

  const getEmbedUrl = () => {
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
    if (type === 'vimeo') {
      return `https://player.vimeo.com/video/${id}?autoplay=1`
    }
    return ''
  }

  if (isPlaying) {
    return (
      <div className='relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl'>
        <iframe
          src={getEmbedUrl()}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='absolute inset-0 h-full w-full'
        />
      </div>
    )
  }

  return (
    <button
      type='button'
      onClick={() => setIsPlaying(true)}
      className='group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl shadow-xl'
    >
      {type === 'youtube' ? (
        <Image
          src={getThumbnail() || '/placeholder.svg'}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
      ) : (
        <div className='bg-muted absolute inset-0' />
      )}
      <div className='bg-foreground/30 group-hover:bg-foreground/40 absolute inset-0 transition-colors' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-primary flex h-20 w-20 transform items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110'>
          <Play
            className='text-primary-foreground ml-1 h-8 w-8'
            fill='currentColor'
          />
        </div>
      </div>
    </button>
  )
}
