import { useEffect, useRef } from 'react';

export const useClickOutside = (cb: () => void) => {
  let domNode = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    let outSideHandler = (event: any) => {
      if (!domNode.current?.contains(event.target)) {
        cb();
      }
    };
    document.addEventListener('click', outSideHandler);
    return () => {
      document.removeEventListener('click', outSideHandler);
    };
  }, [cb]);

  return domNode;
};
