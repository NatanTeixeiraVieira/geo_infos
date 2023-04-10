import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'styled-components';

import Layout from '@/components/Layout';

import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <NextNProgress
        color="#44BBA4"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
