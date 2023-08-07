import React, { PropsWithChildren } from 'react';
import { formType } from '@/types/components/form.type';

function Form({ className, children, onSubmit }: PropsWithChildren<formType>) {
  return <form name='main' autoComplete='on' onSubmit={onSubmit} className={className}>{children}</form>;
}

export default Form;
