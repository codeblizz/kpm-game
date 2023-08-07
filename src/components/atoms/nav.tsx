import { cn } from '@/helpers/lib';
import React, { ReactNode, PropsWithChildren } from 'react';

export type NavType = {
  className: string;
  children: ReactNode;
};

function Nav({ className, children }: PropsWithChildren<NavType>) {
  return <nav className={cn('sticky z-50', className)}>{children}</nav>;
}

export default Nav;
