import Tr from './Tr';
import React from 'react';
import { cn } from '@/helpers/lib';
import { TableType } from '@/types/components/table.type';

const Table = ({ className, head, children }: TableType) => {
  return (
    <table className={cn('', className)} width='100%'>
      {head ? (
        <thead>
          <Tr>{head}</Tr>
        </thead>
      ) : null}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
