import { ReactNode } from "react";

export type nextLinkType = {
  href: string;
  asPath?: string;
  replace?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  className?: string;
  children: ReactNode;
  legacyBehavior?: boolean;
  onClick?: (e: any) => void;
};