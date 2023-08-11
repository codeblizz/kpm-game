import React, { useEffect } from 'react';
import { IToast } from '@/types/auth.type';
import { useSession } from 'next-auth/react';

function useResetToast({ setInfoMsg, setErrorMsg }: IToast) {
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
