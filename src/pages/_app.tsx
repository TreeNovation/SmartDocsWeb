import React from 'react';
import { XProvider } from '@ant-design/x';
import type { AppProps } from 'next/app';

import theme from '../../theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <XProvider theme={theme}>
    <Component {...pageProps} />
  </XProvider>
);

export default App;