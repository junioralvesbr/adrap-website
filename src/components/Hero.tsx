"use client"

import HeroContent from '@/components/HeroContent';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import HeroImage1 from '@/assets/hero/hero-1.jpg';
import HeroImage2 from '@/assets/hero/hero-2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: HeroImage1,
    title: "Grandes Impactos",
    description: 'Pequenas ações'
  },
  {
    id: 2,
    image: HeroImage2,
    title: "Mude uma vida",
    description: 'Deixe sua marca'
  }
]

export default function Hero() {
  return (
    <Swiper
      spaceBetween={0}
      effect={'default'}
      loop={true}
      autoplay={{ delay: 5000 }}
      speed={1000}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      }}
      modules={[Pagination, EffectFade, Autoplay]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <HeroContent title={item.title} description={item.description} image={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}