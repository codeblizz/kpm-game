import HomePage from '@/components/organisms/HomePage';
import BaseLayout from '@/layouts/baseLayout';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
