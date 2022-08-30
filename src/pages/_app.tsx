import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

function MattRobillardApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MattRobillardApp;
