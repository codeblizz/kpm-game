import { useRouter } from 'next/router';
import Form from '@/components/atoms/form';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import NextLink from '@/components/atoms/link';
import React, { useRef, useState } from 'react';
import Toast from '@/components/molecules/toast';
import useResetToast from '@/hooks/useResetToast';
import Paragraph from '@/components/atoms/paragraph';
import { signIn, useSession } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema, ILogin } from '@/helpers/validation';

const AuthForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const refHasLink = useRef<boolean>(false);
  const [loader, setLoader] = useState(false);
  const [infoMsg, setInfoMsg] = useState({ msg: '' });
  const [errorMsg, setErrorMsg] = useState({ msg: '' });
  const defaultValues = { email: '', password: '' };
  const {
    control,
    handleSubmit,
    reset,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors, isDirty },
  } = useForm<ILogin>({
    defaultValues,
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    setLoader(true);
    if (!data) return;
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
      redirect: false,
    });
    if (result?.status === 200) {
      setInfoMsg({ msg: `Login successful` });
      router.push('/');
    } else {
      setErrorMsg({ msg: `Login Failed: User Not Found` });
    }
  };

  useResetToast({ setInfoMsg, setErrorMsg });

  return (
    <div className='w-[37%] min-w-fit'>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center px-20 py-10 border border-gray-200 items-center bg-gray-50 rounded-2xl w-[100%] h-auto'
      >
        <Toast
          infoMsg={infoMsg}
          errorMsg={errorMsg}
        />
        <Paragraph
          text={'Login'}
          className='text-center w-[95%] text-2xl font-bold mb-5'
        />
        <Input
          type='text'
          name='email'
          control={control}
          placeholder='Email'
          register={register}
          getValues={getValues}
          fieldError={errors && errors.email}
          errorClass='mt-[45px] w-40 break-words'
          className={
            'mb-6 px-2 w-[100%] text-slate-500 h-12 rounded-md bg-[#d9d9d980] focus:ring-0 focus:bg-transparent'
          }
        />
        <Input
          type='password'
          name='password'
          control={control}
          register={register}
          getValues={getValues}
          placeholder='Password'
          fieldError={errors && errors.password}
          errorClass='mt-[45px] w-40 break-words'
          className={
            'mb-3 px-2 w-[100%] text-slate-500 h-12 rounded-md bg-[#d9d9d980] focus:ring-0 focus:bg-transparent'
          }
        />
        <Button
          name='submit'
          type={'submit'}
          loader={loader}
          className={
            'px-20 text-xs my-5 h-12 bg-black text-white rounded-lg cursor-pointer'
          }
        >
          Login
        </Button>
        <NextLink
          href={'/register'}
          className='text-xs text-slate-400 py-1 px-4 underline'
        >
          {'New -> Sign Up'}
        </NextLink>
      </Form>
    </div>
  );
};

export default AuthForm;
