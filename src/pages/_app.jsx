import { Roboto } from 'next/font/google';

import { ThemeProvider } from 'styled-components';

import Layout from '@/components/Layout';

import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout font={roboto.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
