import React from 'react';
import { cn } from '@/helpers/lib';

function Footer() {
  return (
    <div
      className={cn([
        `w-[100%] h-[32px] bg-black flex mt-10 flex-col text-slate-600`,
      ])}
    >
      <div className='inline-flex flex-col justify-center mt-5 bg-gray-800'>
        <p className='text-center w-[100%] p-5'>
          Copyright &copy;{new Date().getFullYear()}. KPM - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
