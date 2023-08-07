import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type ButtonProps = {
  name?: string;
  loader: boolean;
  className: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export type extraPropsTypes = {
  titleColor: string;
  buttonBGColor: string;
  backgroundColor: string;
  descriptionColor: string;
};

function Button({
  type,
  onClick,
  children,
  disabled,
  className,
}: PropsWithChildren<ButtonProps> & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
