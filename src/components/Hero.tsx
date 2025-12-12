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
    <div>

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
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div> */}


      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div> */}
    </div>
  )
}