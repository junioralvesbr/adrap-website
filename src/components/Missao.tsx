import Image from 'next/image';

import evento1 from '@/assets/eventos/eventos-1.jpg';
import slowVerde from '@/assets/slow-verde.png';
import Link from 'next/link';

const events = [
  {
    title: 'Curso de musica',
    description: 'Aulas de violão, teclado, guitarra, coral',
    image: evento1,
  },
  {
    title: 'Curso de pintura',
    description: 'Aulas de violoão, teclado, guitarra, coral',
    image: evento1,
  },
  {
    title: 'Curso de dança',
    description: 'Aulas de teclado, guitarra, coral',
    image: evento1,
  },
];

export default function Missao() {
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
            Nossa Missão
          </h2>

          <p className="font-medium font-poppins text-white text-center sm:text-lg lg:text-xl">
            Nosso focu é oferecer desenvolvimento através da cultura, educação.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-bl-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between min-h-72">
                <div>
                  <h3 className="text-2xl font-bold font-merriweather text-second leading-tight">
                    {event.title}
                  </h3>

                  <Image
                    src={slowVerde}
                    alt="Faixa Verde"
                    width={100}
                    height={50}
                    className="w-16 sm:w-20 lg:w-24"
                  />
                </div>

                <p className='text-lg font-medium font-poppins text-second'>
                  {event.description}
                </p>

                {/* Button */}
                <Link href="/eventos" className="bg-[#A8D5BA] hover:bg-[#7ECDC8] text-white text-center font-semibold font-poppins py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
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
