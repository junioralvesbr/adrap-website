import Image from 'next/image';

import FaixaVerdeImage from '@/assets/faixa-verde.png';
import voluntario1 from '@/assets/voluntarios/voluntario-1.jpg';
import voluntario2 from '@/assets/voluntarios/voluntario-2.jpg';
import voluntario3 from '@/assets/voluntarios/voluntario-3.jpg';
import voluntario4 from '@/assets/voluntarios/voluntario-4.jpg';
import voluntario5 from '@/assets/voluntarios/voluntario-5.jpg';
import voluntario6 from '@/assets/voluntarios/voluntario-6.jpg';
import voluntario7 from '@/assets/voluntarios/voluntario-7.jpg';
import voluntario8 from '@/assets/voluntarios/voluntario-8.jpg';

const volunteers = [
  {
    name: 'Bobbie Ferry',
    role: 'Lead Volunteer',
    image: voluntario1,
  },
  {
    name: 'Lillie Braun',
    role: 'Lead Volunteer',
    image: voluntario2,
  },
  {
    name: 'Sherry Miller',
    role: 'Lead Volunteer',
    image: voluntario3,
  },
  {
    name: 'Virgil Hauck',
    role: 'Lead Volunteer',
    image: voluntario4,
  },
  {
    name: 'John Smith',
    role: 'Lead Volunteer',
    image: voluntario5,
  },
  {
    name: 'Maria Garcia',
    role: 'Lead Volunteer',
    image: voluntario6,
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Volunteer',
    image: voluntario7,
  },
  {
    name: 'Emily Chen',
    role: 'Lead Volunteer',
    image: voluntario8,
  },
];

export default function Volunteers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merriweather text-second">
            Nossos Voluntários
          </h2>
          <Image
            src={FaixaVerdeImage}
            alt="Faixa Verde"
            width={100}
            height={50}
            className="w-16 sm:w-20 lg:w-24"
          />
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-3/4 overflow-hidden rounded-3xl bg-[#e8ddd1] mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src={volunteer.image}
                  alt={volunteer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-second mb-1">
                  {volunteer.name}
                </h3>
                <p className="text-base sm:text-lg font-medium font-poppins text-first">
                  {volunteer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
