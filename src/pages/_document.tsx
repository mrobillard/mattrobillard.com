import { Head, Html, Main, NextScript } from 'next/document';

import CriticalCSS from '@/components/ui/CriticalCSS';

export default function MattRobillardDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Matt Robillard" />
        <meta property="og:title" content="Matt Robillard" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content="Matt Robillard Blog" />
        <meta name="title" content="Matt Robillard" />
        <meta name="description" content="Matt Robillard Blog" />
        <CriticalCSS />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
