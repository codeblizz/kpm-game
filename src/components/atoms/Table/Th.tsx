import React from 'react';
import { cn } from '@/helpers/lib';
import { TableColType } from '@/types/components/table.type';

const Th = ({ colspan, rowspan, className, children }: TableColType) => {
  return (
    <th colSpan={colspan || 1} rowSpan={rowspan || 1} className={cn('', className)}>
      {children}
    </th>
  );
};

export default Th;
