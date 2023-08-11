import React from 'react';
import { cn } from '@/helpers/lib';
import { Toast } from '@/types/auth.type';

function Toast({ infoMsg, errorMsg }: Toast) {
  return (
    <div
      className={cn(
        infoMsg.msg ? 'bg-green-500' : errorMsg.msg ? 'bg-red-500' : '',
        'font-semibold text-slate-100 px-3 py-2 rounded-lg absolute bottom-[1%] right-[1%]'
      )}
    >
      {infoMsg.msg || errorMsg.msg}
    </div>
  );
}

export default Toast;
