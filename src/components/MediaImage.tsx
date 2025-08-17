import Image, { ImageProps } from 'next/image';
// import { PLACEHOLDER_IMAGE } from '@app/constants';

const PLACEHOLDER_IMAGE = '/images/placeholder.jpg';

export function MediaImage({
  image = PLACEHOLDER_IMAGE,
  height = 320,
  width = 640,
  alt = 'no info available for image',
  className,
  sizes = '10vw',
  objectFit,
  disableZoom = false,
}: {
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  disableZoom?: boolean;
  objectFit?: 'cover' | 'contain';
}) {
  const styleProps: Partial<ImageProps> = {
    ...(objectFit
      ? { style: { objectFit }, fill: true, sizes }
      : { width, height }),
  };

  return (
    <div className={`flex items-center justify-center h-full`}>
      <div className="overflow-hidden relative group w-full h-full">
        <Image
          {...styleProps}
          src={image}
          alt={alt}
          className={`object-cover w-full ${!disableZoom ? 'group-hover:scale-110' : ''
            } transition duration-300 ease-in-out ${className}`}
        />
      </div>
    </div>
  );
}
