import Head from 'next/head';

import { Main } from '@/styles/components/Layout';
import { Roboto } from 'next/font/google';

import Header from './Header';
import Footer from './Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
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
      <Header font={roboto.className} />
      <Main className={roboto.className}>{children}</Main>
      <Footer font={roboto.className} />
    </>
  );
}
