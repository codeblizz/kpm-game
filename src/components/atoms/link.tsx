import Link from 'next/link';
import { cn } from '@/helpers/lib';
import { nextLinkType } from '@/types/components/link.type';
import React, { forwardRef, LinkHTMLAttributes, PropsWithChildren } from 'react';

const NextLink = ({
  href,
  asPath,
  shallow,
  onClick,
  replace,
  passHref,
  children,
  className,
  legacyBehavior,
}: PropsWithChildren<nextLinkType>,
ref: unknown
) => {
  return (
    <Link
      as={asPath}
      href={href}
      passHref={passHref}
      shallow={shallow}
      replace={replace}
      onClick={onClick}
      legacyBehavior={legacyBehavior}
      className={cn(['cursor-pointer', className])}
    >
      {children}
    </Link>
  );
};

export default forwardRef(NextLink);
