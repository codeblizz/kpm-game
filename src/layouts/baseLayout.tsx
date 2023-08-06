import Header from '@/components/atoms/header';
import Navbar from '@/components/molecules/navbar';
import { BaseLayoutProps } from '@/types/layout.type';
import React, { Fragment, memo, PropsWithChildren } from 'react';

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main className='flex w-full min-h-screen'>{children}</main>
    </Fragment>
  );
}

export default memo(BaseLayout);
