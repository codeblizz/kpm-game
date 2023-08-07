import Image from '../atoms/image';
import utils from '@/helpers/utils';
import Card from '@/components/atoms/card';
import Table from '@/components/atoms/Table';
import { useSession } from 'next-auth/react';
import Hero from '@/components/molecules/hero';
import matchList from '@/data/match-list.json';
import React, { Fragment, useState } from 'react';
import BetNavBar from '@/components/molecules/betNav';
import MatchCard from '@/components/molecules/matchCard';
import HeroImage from '@/components/assets/svgs/hero.svg';
import BetCard from '@/components/assets/svgs/betCard.svg';
import BetSlipCard from '@/components/molecules/betSlipCard';

type View = {
  name: string;
  status: boolean;
};

function HomePage() {
  const { data: session } = useSession();
  const [betRate, setBetRate] = useState<number>(1);
  const [showSlip, setShowSlip] = useState<boolean>(false);
  const [view, setView] = useState<View>({ name: '', status: false });

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
      <BetNavBar
        slotName={'Popular Slots'}
        view={view}
        setView={setView}
        titleBar='View All'
      />
      <Card className='w-full pt-2 pb-5 mb-5 px-3 rounded-xl'>
        {view.status && view.name === 'Popular Slots' && (
          <>
            {[{ cImage: '' }].map((c: any, idx: number) => (
              <Image
                key={idx}
                src={c.cImage}
                alt=''
                className=''
                width={100}
                height={100}
              />
            ))}
          </>
        )}
      </Card>
      <BetNavBar
        slotName={'Today Matches'}
        titleBar='View All'
        view={view}
        setView={setView}
      />
      <Card className='w-full pt-2 pb-5 px-3 rounded-xl'>
        {view.status && view.name === 'Today Matches' && (
          <Table className='w-full flex snap-y snap-end flex-col h-56 overflow-y-auto scrollbar-hide transition delay-500 ease-in-out'>
            {Object.values(matchList).map((match: any, idx: number) => (
              <MatchCard
                key={idx}
                matchList={match}
                idx={idx}
                setShowSlip={setShowSlip}
              />
            ))}
          </Table>
        )}
      </Card>
      <BetSlipCard
        href={''}
        hasLink={false}
        description={'Enter Stake'}
        isOpen={showSlip}
        isBetEmpty={true}
        cancelButtonAction={() => {}}
        okButtonAction={() => {}}
        buttonText={['Bet Now']}
        modalTitle={`Bet Slip (${betRate})`}
        className={'bg-black/50 text-white rounded-t-lg'}
        setOpen={setShowSlip}
        extraProps={utils.extraPropsMapper}
      />
    </Fragment>
  );
}

export default HomePage;
