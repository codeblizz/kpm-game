import { cn } from '@/helpers/lib';
import React, { HTMLAttributes } from 'react';

type paragraphType = {
  className: string;
  onClick?: () => void;
  text: string | number | undefined;
}

const Paragraph = ({ text, className, onClick, ...rest }: paragraphType & HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn([className, ''])} onClick={onClick} {...rest}>
      {text}
    </p>
  );
};

export default Paragraph;
