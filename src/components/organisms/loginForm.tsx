import { SubmitHandler, useForm } from 'react-hook-form';
import { cn } from '@/helpers/lib';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import Form from '@/components/atoms/form';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import NextLink from '@/components/atoms/link';
import Paragraph from '@/components/atoms/paragraph';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, ILogin } from '@/helpers/validation';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

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

  const onResetField = (id: number) => {
    if (id === 0) refHasLink.current = true;
    reset();
    setLoader(false);
  };

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (status === 'authenticated') {
      localStorage.setItem('accessToken', session.accessToken);
    }
    timeout = setTimeout(() => {
      setInfoMsg({ msg: '' });
      setErrorMsg({ msg: '' });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [session?.accessToken, status]);

  return (
    <div className='w-[37%] min-w-fit'>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center px-20 py-10 border border-gray-200 items-center bg-gray-50 rounded-2xl w-[100%] h-auto'
      >
        <span
          className={cn(
            infoMsg.msg ? 'bg-green-500' : errorMsg.msg ? 'bg-red-500' : '',
            'font-semibold mb-5 text-slate-100 px-3 py-2 rounded-lg absolute bottom-[7%] right-[3%]'
          )}
        >
          {infoMsg.msg || errorMsg.msg}
        </span>
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
