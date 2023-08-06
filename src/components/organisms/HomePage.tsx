import Image from '../atoms/image';
import React, { Fragment } from 'react';
import Card from '@/components/atoms/card';
import Hero from '@/components/molecules/hero';
import HeroImage from '@/components/assets/svgs/hero.svg';
import BetCard from '@/components/assets/svgs/betCard.svg';
import BetNavBar from '@/components/molecules/betNav';

function HomePage() {
  return (
    <Fragment>
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
      {/* <div className='grid grid-cols-2'> */}
      {/* {[1, 2].map((c, idx) => (
          <Card key={idx} className=''> */}
      <Image src={BetCard} alt='' className='my-10' width={1585} height={400} />
      {/* </Card>
        ))} */}
      {/* </div> */}
      <BetNavBar slotName={'Popular Slots'} titleBar='View All' />
      <div className='w-full px-4 py-2'>
        {[{ cImage: '' }].map((c: any, idx: number) => (
          <Card className={''} key={idx}>
            <Image
              src={c.cImage}
              alt=''
              className=''
              width={100}
              height={100}
            />
          </Card>
        ))}
      </div>
      <BetNavBar slotName={'Today Matches'} titleBar='View All' />
    </Fragment>
  );
}

export default HomePage;
