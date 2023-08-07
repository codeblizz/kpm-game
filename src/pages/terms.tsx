import TermsPage from '@/components/organisms/termsPage';
import BaseLayout from '@/layouts/baseLayout';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Terms() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-10 px-16 ${inter.className}`}
    >
      <TermsPage />
    </main>
  );
}

Terms.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};
