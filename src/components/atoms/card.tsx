import { cn } from '@/helpers/lib';
import React, { PropsWithChildren } from 'react';
import { Card } from '@/types/components/card.type';

function Card({ className, children }: PropsWithChildren<Card>) {
  return (
    <div className={cn(['border shadow-gray-300 shadow-xl', className])}>{children}</div>
  )
}

export default Card;