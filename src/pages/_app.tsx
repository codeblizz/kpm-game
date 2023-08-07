import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { StrictMode, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';
import { AppPropsWithLayout } from '@/types/layout.type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout ?? ((page) => page);
  const [interval, setInterval] = useState<number>(0);

  return (
    <StrictMode>
      <SessionProvider session={session} refetchInterval={interval}>
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
      </SessionProvider>
    </StrictMode>
  );
}

export default App;
