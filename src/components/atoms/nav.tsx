import React, { ReactNode, PropsWithChildren } from 'react';

export type NavType = {
  className: string;
  children: ReactNode;
};

function Nav({ className, children }: PropsWithChildren<NavType>) {
  return <nav className={className}>{children}</nav>;
}

export default Nav;
