import '@public/normalize.css';

import type { AppProps } from 'next/app';

const MRApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MRApp;