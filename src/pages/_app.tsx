import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';
import { StrictMode, useState, useRef } from 'react';
import { AppPropsWithLayout } from '@/types/layout.type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider, initializeStore, type StoreType, zustandContext } from '@/store';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout ?? ((page) => page);
  const [interval, setInterval] = useState<number>(0);
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(pageProps.initialZustandState)
  }

  return (
    <StrictMode>
      <SessionProvider session={session} refetchInterval={interval}>
        <StoreProvider value={storeRef.current}>
          <QueryClientProvider client={queryClient}>
            <NextNProgress
              color='gray'
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
              options={{ showSpinner: false }}
            />
            <main id='content'>{getLayout(<Component {...pageProps} />)}</main>
            {process.env.NODE_ENV === 'development' ? (
              <ReactQueryDevtools initialIsOpen={false} />
            ) : null}
          </QueryClientProvider>
        </StoreProvider>
      </SessionProvider>
    </StrictMode>
  );
}

export default App;
