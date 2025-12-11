import Image, { ImageProps } from 'next/image';

type Props = {
  title: string;
  description: string;
  image: ImageProps['src']
}


const HeroContent = ({ title, description, image }: Props) => {
  return (
    <div className="overflow-hidden h-[80dvh]">
      <div className="w-full h-full bg-primary-500">

        <Image
          src={image}
          alt="Pessoas voluntariando"
          fill
          priority
          className='object-cover'
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
      </div>
    </div>
  );
};

export default HeroContent;
