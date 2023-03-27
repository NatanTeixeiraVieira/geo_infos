import Head from 'next/head';

import Header from '../Header';

export default function Layout({ children, font }) {
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
      <Header />
      <main className={font}>{children}</main>
    </>
  );
}
