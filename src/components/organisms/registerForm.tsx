import { cn } from '@/helpers/lib';
import { useRouter } from 'next/router';
import Form from '@/components/atoms/form';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import NextLink from '@/components/atoms/link';
import React, { useRef, useState } from 'react';
import Paragraph from '@/components/atoms/paragraph';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import RegisterService from '@/services/register.service';
import { RegisterSchema, IRegister } from '@/helpers/validation';

const AuthForm = () => {
  const router = useRouter();
  const refHasLink = useRef<boolean>(false);
  const [loader, setLoader] = useState(false);
  const [infoMsg, setInfoMsg] = useState({ msg: '' });
  const [errorMsg, setErrorMsg] = useState({ msg: '' });
  const defaultValues = { fullName: '', email: '', password: '' };
  const {
    control,
    handleSubmit,
    reset,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors, isDirty },
  } = useForm<IRegister>({
    defaultValues,
    resolver: zodResolver(RegisterSchema),
  });

  const onResetField = (id: number) => {
    if (id === 0) refHasLink.current = true;
    reset();
    setLoader(false);
  };

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    setLoader(true);
    console.log('data', data)
    const result: any = await RegisterService.registration(data);
    if (result?.data.statusCode === 200) {
      setInfoMsg({ msg: result?.data.message });
      router.push('/login');
    } else {
      setErrorMsg({ msg: result?.data.message });
    }
  };

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
          text={'Sign Up'}
          className='text-center w-[95%] text-2xl font-bold mb-5'
        />
        <Input
          type='text'
          name='fullName'
          control={control}
          register={register}
          getValues={getValues}
          placeholder='Enter full name'
          errorClass='mt-[48px] w-[100%]'
          fieldError={errors && errors?.fullName}
          className={
            'mb-6 px-2 w-[100%] text-slate-500 h-12 rounded-md bg-[#d9d9d980] focus:ring-0 focus:bg-transparent'
          }
        />
        <Input
          type='text'
          name='email'
          control={control}
          placeholder='Email'
          register={register}
          getValues={getValues}
          fieldError={errors && errors.email}
          errorClass='mt-[48px] w-40 break-words'
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
          errorClass='mt-[48px] w-40 break-words'
          className={
            'mb-3 px-2 w-[100%] text-slate-500 h-12 rounded-md bg-[#d9d9d980] focus:ring-0 focus:bg-transparent'
          }
        />
        <Button
          name='submit'
          type={'submit'}
          loader={loader}
          className={
            'px-[4.6rem] text-xs h-12 my-5 bg-black text-white rounded-lg cursor-pointer'
          }
        >
          Sign Up
        </Button>
        <NextLink
          href={'/login'}
          className='text-xs text-slate-400 py-1 px-4 underline'
        >
          {`Member Login?`}
        </NextLink>
      </Form>
    </div>
  );
};

export default AuthForm;
