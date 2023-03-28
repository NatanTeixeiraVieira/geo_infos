import { ThemeProvider } from 'styled-components';

import Layout from '@/components/Layout';

import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
