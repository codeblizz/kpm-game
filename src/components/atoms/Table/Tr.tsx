import React from 'react';
import { cn } from '@/helpers/lib';
import { ContentElementProps } from '@/types/components/table.type';

const Tr = ({ className, children }: ContentElementProps) => {
  return <tr className={cn('', className)}>{children}</tr>;
};

export default Tr;
