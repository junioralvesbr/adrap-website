import Image, { ImageProps } from 'next/image';

type Props = {
  title: string;
  description: string;
  image: ImageProps['src']
}


const HeroContent = ({ title, description, image }: Props) => {
  return (
    <div className="overflow-hidden h-[80dvh]">
      <div className="relative w-full h-full bg-primary-500">

        <Image
          src={image}
          alt="Pessoas voluntariando"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
          priority
        />

        <div className="container mx-auto px-4 py-16 flex items-center h-full">
          <div className="text-white max-w-2xl">
            {/* Estas classes funcionam no Tailwind 4 */}
            <p className="text-4xl font-merriweather font-medium mb-4 animate-fadeInSlide">
              {description}
            </p>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeInSlide delay-200">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-white text-[#3C5735] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeInSlide delay-400 text-center">
                Donate now
              </a>
              <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-[#3C5735] transition duration-300 ease-in-out transform hover:scale-105 animate-fadeInSlide delay-600 text-center">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20 md:h-24" xmlns="www.w3.org" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,186.7C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
