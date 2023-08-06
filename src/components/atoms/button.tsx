import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type ButtonProps = {
  name?: string;
  className: string;
  disabled?: boolean;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

function Button({
  type,
  children,
  disabled,
  className,
}: PropsWithChildren<ButtonProps> & HTMLAttributes<HTMLButtonElement>) {
  return <button type={type} disabled={disabled} className={className}>{children}</button>;
}

export default Button;
