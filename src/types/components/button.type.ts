import { authMessageType } from '@/types/auth.type';
import React, { ButtonHTMLAttributes } from 'react';

type extraPropsTypes = {
  titleColor: string;
  buttonBGColor: string;
  backgroundColor: string;
  descriptionColor: string;
};

export type socialMediaButtonType = {
  iconOnly: boolean;
  className?: string;
  iconClass?: string;
}

export type SmartButtonType = {
  passHref?: boolean;
  href: string;
  asPath?: string;
  isOpen: boolean;
  hasLink: boolean;
  replace?: boolean;
  className: string;
  isShallow?: boolean;
  modalTitle: string;
  description: string;
  buttonText: string[];
  legacyBehavior?: boolean;
  extraProps: extraPropsTypes;
  setOpen: (value: boolean) => void;
  okButtonAction: (id: number) => void;
  cancelButtonAction: (id: number) => void;
};

export interface buttonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: any;
  name?: string;
  value?: string;
  style?: object;
  loader?: boolean;
  className?: string;
  buttonText: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onResetField?: () => void;
  onClick?: (data: any) => void;
}
