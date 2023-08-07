import React from 'react';
import { cn } from '@/helpers/lib';
import { TableColType } from '@/types/components/table.type';

const Td = ({ colspan, rowspan, className, children }: TableColType) => {
  return (
    <td colSpan={colspan || 1} rowSpan={rowspan || 1} className={cn('', className)}>
      {children}
    </td>
  );
};

export default Td;
