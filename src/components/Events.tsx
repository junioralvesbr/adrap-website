import Image from 'next/image';

import evento1 from '@/assets/eventos/eventos-1.jpg';
import evento2 from '@/assets/eventos/eventos-2.jpg';
import FaixaVerdeImage from '@/assets/faixa-verde.png';
import Link from 'next/link';

const events = [
  {
    date: {
      day: '22',
      month: 'May',
      year: '2025',
    },
    category: 'apresentação',
    title: 'Cantata de Natal',
    location: 'Centro de Maringá',
    image: evento1,
  },
  {
    date: {
      day: '20',
      month: 'May',
      year: '2025',
    },
    category: 'apresentação',
    title: 'Cantata de Natal',
    location: 'Shopping Mandacarú',
    image: evento2,
  },
  {
    date: {
      day: '18',
      month: 'May',
      year: '2025',
    },
    category: 'apresentação',
    title: 'Cantata de Natal',
    location: 'Shopping Mandacarú',
    image: evento1,
  },
];

export default function Events() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7ECDC8 0%, #A8D5BA 50%, #E8DDD1 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merriweather text-white text-center">
            Nosso Eventos
          </h2>
          <Image
            src={FaixaVerdeImage}
            alt="Faixa Verde"
            width={100}
            height={50}
            className="w-16 sm:w-20 lg:w-24 brightness-200 saturate-0 blur-0 hue-rotate-0 contrast-100"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Date Badge */}
              <div className="absolute top-6 left-6 z-20 bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-md">
                <span className="text-2xl font-bold font-poppins text-second">
                  {event.date.day}
                </span>
                <span className="text-xs font-medium font-poppins text-gray-600 uppercase">
                  {event.date.month}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <p className="text-sm font-semibold font-poppins text-[#A8D5BA] uppercase tracking-wide mb-3">
                  {event.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold font-merriweather text-second mb-4 leading-tight">
                  {event.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 mb-6">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium font-poppins text-gray-700">
                    {event.location}
                  </span>
                </div>

                {/* Button */}
                <Link href="/eventos" className="bg-[#A8D5BA] hover:bg-[#7ECDC8] text-white font-semibold font-poppins py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Ver mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
