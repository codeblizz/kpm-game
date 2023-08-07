import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { authMessageType } from '@/types/auth.type';

type ToastType = {
  setInfoMsg: (v: authMessageType) => void;
  setErrorMsg: (v: authMessageType) => void;
};

function useResetToast({ setInfoMsg, setErrorMsg }: ToastType) {
  const { data: session, status } = useSession();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (status === 'authenticated') {
      localStorage.setItem('accessToken', session.accessToken);
    }
    timeout = setTimeout(() => {
      setInfoMsg({ msg: '' });
      setErrorMsg({ msg: '' });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [session?.accessToken, setErrorMsg, setInfoMsg, status]);
}

export default useResetToast;
