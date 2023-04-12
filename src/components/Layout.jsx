import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '@/contexts/Theme/ThemeContext';

import { Main } from '@/styles/components/Layout';
import GlobalStyles from '@/styles/GlobalStyles';

import Footer from './Footer';
import Header from './Header';
import Skeleton from './Skeleton';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(false);
  const [urlState, setUrlState] = useState('');
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setIsLoading(true);
      setUrlState(url);
      window.scrollTo(0, 0);
    });
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  });

  return (
    <>
      <Head>
        <title>GeoInfos</title>
        <meta
          name="description"
          content="Informações sobre os estados brasileiros"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header font={roboto.className} />
        {isLoading && <Skeleton url={urlState} />}
        <Main className={roboto.className}>{children}</Main>
        <Footer font={roboto.className} />
      </ThemeProvider>
    </>
  );
}
