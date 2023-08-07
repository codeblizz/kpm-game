import React from 'react';
import Image from '../atoms/image';
import Hero from '@/components/molecules/hero';
import HeroImage from '@/components/assets/svgs/hero.svg';
import Paragraph from '@/components/atoms/paragraph';

function TermsPage() {
  return (
    <div>
      <Hero
        imageSrc={HeroImage}
        className='text-start'
        buttonAction={() => {}}
        width={1585}
        height={751}
        buttonText='Register'
        imgClass=''
        texts={[
          {
            label: '£200',
            labelClass: 'text-kpm tracking-tighter font-semibold text-5xl',
          },
          {
            label: 'Welcome Bonus',
            labelClass: 'text-white tracking-tighter font-semibold text-5xl',
          },
          {
            label: 'Receive a bonus up £200 and 40 free rounds',
            labelClass: 'text-gray-300 text-sm',
          },
        ]}
      />
      <Paragraph
        text='Terms And Conditions'
        className='text-start text-2xl mt-5 font-bold'
      />
      <article className='my-5'>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </article>
    </div>
  );
}

export default TermsPage;
