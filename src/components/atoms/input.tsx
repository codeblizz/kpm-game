import { cn } from '@/helpers/lib';
import { Controller } from 'react-hook-form';
import { IFields } from '@/types/components/form.type';
import React, { HTMLAttributes, useState } from 'react';
import IconEyeOpen from '@/components/assets/icons/eyeOpen';
import IconEyeClose from '@/components/assets/icons/eyeClose';

type InputType = {
  type?: string;
  name: string;
  className?: string;
  errorClass?: string;
  fieldError?: any;
  placeholder?: string;
  control?: any
  register?: any
  setValue?: any
  getValues?: any;
} & HTMLAttributes<HTMLInputElement>

function Input({
  type,
  name,
  control,
  register,
  setValue,
  className,
  getValues,
  errorClass,
  fieldError,
  placeholder,
}: InputType) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div
      className={cn(
        'relative flex',
        type === 'password' ? 'flex-row' : 'flex-col'
      )}
    >
      <Controller
        name={name}
        control={control}
        render={({ fields }: IFields) => (
          <input
            {...fields}
            defaultValue={getValues(name)}
            className={cn(
              fieldError?.message
                ? 'border animate-pulse focus:border-red-700 border-red-700'
                : 'focus:border-gray-500',
              `placeholder:italic placeholder:text-xs h-9 placeholder:text-[#9da5b1] placeholder-opacity-5 disabled:cursor-not-allowed`,
              className
            )}
            type={showPassword ? 'text' : type}
            placeholder={placeholder}
            {...register(name)}
          />
        )}
      />
      {type === 'password' && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={'absolute top-[20%] cursor-pointer right-[5%]'}
        >
          {showPassword ? <IconEyeOpen /> : <IconEyeClose />}
        </span>
      )}
      {fieldError ? (
        <span
          className={cn([
            'absolute text-[11px] text-red-400 text-left',
            errorClass,
          ])}
        >
          {fieldError?.message}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default Input;
