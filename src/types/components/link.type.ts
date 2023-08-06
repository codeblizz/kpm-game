import { ReactNode } from "react";

export type nextLinkType = {
  passHref?: boolean;
  href: string;
  asPath?: string;
  replace?: boolean;
  shallow?: boolean;
  className?: string;
  children: ReactNode;
  legacyBehavior?: boolean;
  onClick?: (e: any) => void;
};