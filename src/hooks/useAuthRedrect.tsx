import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function useAuthRedirect(
  url: string = '/login',
  shouldRedirect: boolean = true
) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isAuth = status === 'authenticated';

  useEffect(() => {
    if (!isAuth) {
      if (router.route !== '/login' && shouldRedirect) router.push('/login');
    } 
    if (router.route === '/login' && shouldRedirect) router.push(url);
  }, [
    url,
    isAuth,
    router,
    shouldRedirect,
  ]);
}

export default useAuthRedirect;
