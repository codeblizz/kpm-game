import React, { BaseSyntheticEvent, FormEventHandler } from 'react';

export type formType = {
  className: string;
  children: React.ReactNode;
  onSubmit?: (data:any) => void;
};

export type fieldsType = {
  onChange?: (...event: any[]) => void;
  onBlur?: boolean;
  value?: string;
  name?: string;
  ref?: any;
};

export interface IFields {
  fields?: fieldsType;
  fieldState: any;
  formState: any;
}

