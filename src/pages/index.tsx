
import { ReactElement } from 'react';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import BaseLayout from '@/layouts/baseLayout';
import { JWT, getToken } from 'next-auth/jwt';
import { checkIfTokenExpired } from '@/helpers/lib';
import useAuthRedirect from '@/hooks/useAuthRedrect';
import HomePage from '@/components/organisms/homePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  useAuthRedirect('/login', true);

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
    if (isExpired) {
      return {
        redirect: {
          destination: '/401',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  };
