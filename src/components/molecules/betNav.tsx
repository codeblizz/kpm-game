import { cn } from '@/helpers/lib';
import React, { useState } from 'react';
import Nav from '@/components/atoms/nav';
import Button from '@/components/atoms/button';
import Paragraph from '@/components/atoms/paragraph';
import IconChevronLeft from '@/components/assets/icons/arrowLeft';
import IconChevronRight from '@/components/assets/icons/arrowRight';

function BetNavBar({ slotName, titleBar }: any) {

  return (
    <Nav className='bg-black flex space-x-4 items-center rounded-t-2xl justify-between text-sm w-[100%] py-2 px-4 h-14'>
      <div className='flex items-center justify-between space-x-2'>
        <span className='bg-kpm rounded-full w-2 h-2'></span>
        <Paragraph
          className={'text-white text-xl font-semibold text-center'}
          text={slotName.toUpperCase()}
        />
      </div>
      <div className='flex justify-between items-center space-x-4'>
        <span className='flex justify-between items-center space-x-2 rounded-full'>
          <IconChevronLeft className='bg-kpm w-5 h-5 rounded-full' />
          <IconChevronRight className='bg-kpm w-5 h-5 rounded-full' />
        </span>
          <Button
            className={cn(
              'flex items-center justify-between p-2 rounded-md bg-white text-black'
            )}
          >
            {titleBar}
          </Button>
      </div>
    </Nav>
  );
}

export default BetNavBar;
