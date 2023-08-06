import React from 'react';
import Image from '../atoms/image';
import { cn } from '@/helpers/lib';
import Button from '@/components/atoms/button';
import Paragraph from '@/components/atoms/paragraph';

type HeroLabel = {
  label: string;
  labelClass: string;
};

type HeroType = {
  imgClass: string;
  className: string;
  buttonText: string;
  width: string | number;
  height: string | number;
  imageSrc: string | Blob;
  buttonAction: () => void;
  texts: HeroLabel[];
};

function Hero({
  texts,
  width,
  height,
  imageSrc,
  imgClass,
  className,
  buttonText,
  buttonAction,
}: HeroType) {
  return (
    <div className={cn(['relative', className])}>
      <Image
        src={imageSrc}
        alt='hero'
        height={Number(height)}
        width={Number(width)}
        className={imgClass}
        priority={true} 
      />
      <div className='absolute flex flex-col justify-start items-center top-[15%] space-y-2 md:space-y-6 md:top-[28%] md:left-[22%] w-[100%] md:w-[58%]'>
        {/* {texts.map((text: HeroLabel, idx: number) => (
          <Paragraph key={idx} text={text.label} className={text.labelClass} />
        ))} */}
        {/* {buttonText && (
          <Button
            name={'submit'}
            disabled={false}
            autoFocus={false}
            onClick={buttonAction}
            className={
              'bg-kpm text-center whitespace-nowrap text-md rounded-md px-2 h-10'
            }
          >
            {buttonText}
          </Button>
        )} */}
      </div>
    </div>
  );
}

export default Hero;
