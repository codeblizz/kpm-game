import React from 'react';
import NextImage from 'next/image';
import { ImageType } from '@/types/components/image.type';

function Image({ src, alt, className, width, height, onClick, priority }: ImageType) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      onClick={onClick}
    />
  );
}

export default Image;
