import { ReactElement } from 'react';
import Header from '@/components/atoms/header';
import BaseLayoutNoMenu from '@/layouts/baseLayout';
import Paragraph from '@/components/atoms/paragraph';
import useAuthRedirect from '@/hooks/useAuthRedrect';

const NotAuthorized = () => {
  
  useAuthRedirect('/login', true);

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='w-screen h-full flex flex-col justify-center items-center bg-stone-100'>
        <Paragraph
          className='text-2xl animate-bounce italic text-center font-inter'
          text='Application session is expired!!'
        />
      </div>
    </div>
  );
};

NotAuthorized.getLayout = (page: ReactElement) => {
  return <BaseLayoutNoMenu>{page}</BaseLayoutNoMenu>;
};

export default NotAuthorized;
