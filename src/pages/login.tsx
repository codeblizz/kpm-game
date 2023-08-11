import React, { ReactElement } from 'react';
import BaseLayout from '@/layouts/baseLayout';
import useAuthRedirect from '@/hooks/useAuthRedrect';
import LoginPage from '@/components/organisms/loginForm';

function SignInPage() {

  return (
    <div className='bg-gray-700 fixed w-full min-h-screen flex justify-center items-center'>
      <LoginPage />
    </div>
  );
}

SignInPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default SignInPage;
