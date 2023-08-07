import Header from '@/components/atoms/header';
import Navbar from '@/components/molecules/navbar';
import Footer from '@/components/organisms/footer';
import { BaseLayoutProps } from '@/types/layout.type';
import React, { Fragment, memo, PropsWithChildren } from 'react';

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className='flex w-full min-h-screen'>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default memo(BaseLayout);
