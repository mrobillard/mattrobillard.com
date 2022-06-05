import type { AppProps } from 'next/app';

import '@public/normalize.css';
import "../fonts.css";


const MRApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MRApp;