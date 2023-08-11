import { ReactElement, use } from 'react';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import BaseLayout from '@/layouts/baseLayout';
import { JWT, getToken } from 'next-auth/jwt';
import { ISlotData, ISlots, Slots } from '@/types/slots.type';
import { IMatchData } from '@/types/matches.type';
import HomeService from '@/services/home.service';
import { checkIfTokenExpired } from '@/helpers/lib';
import useAuthRedirect from '@/hooks/useAuthRedrect';
import HomePage from '@/components/organisms/homePage';
import { initializeStore } from '@/store';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {

  useAuthRedirect('/login', false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-10 px-16 ${inter.className}`}
    >
      <HomePage />
    </main>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let isExpired = true;
  const token: JWT | null = await getToken({ req });
  if (token?.accessToken != null) {
    const access_token = token?.accessToken;
    isExpired = checkIfTokenExpired(access_token as string);
  }
  const slotData = (await HomeService.getAllSlots()) as unknown as ISlotData;
  const matchData =
    (await HomeService.getAllMatches()) as unknown as IMatchData;

  if (isExpired) {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }
  
  const { slots } = slotData.data;
  const { matches } = matchData.data;

  // initializeStore().getState().slots.updateSlots([...slots]);
  // initializeStore().getState().matches.updateMatches([...matches]);

  return {
    props: {
      initialZustandState: {
        ...JSON.parse(JSON.stringify(initializeStore().getState())),
        slots,
        matches
      }
    },
  };
};
