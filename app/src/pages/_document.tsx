import { Head, Html, Main, NextScript } from 'next/document';

const MRDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/uti4vli.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MRDocument;