import React, { ReactElement } from 'react';
import BaseLayout from '@/layouts/baseLayout';
import RegisterPage from '@/components/organisms/registerForm';

function SignUpPage() {

  return (
    <div className='bg-gray-700 fixed w-full min-h-screen flex justify-center items-center'>
      <RegisterPage />
    </div>
  );
}

SignUpPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default SignUpPage;
