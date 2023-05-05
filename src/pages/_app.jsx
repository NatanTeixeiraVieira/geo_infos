import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/Layout';
import { ThemeContextProvider } from '@/contexts/Theme/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <NextNProgress
          color="#44BBA4"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
