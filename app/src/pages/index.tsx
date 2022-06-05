import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Robillard</title>
      </Head>
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: '#f2f7f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'objektiv-mk3',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '32px',
            letterSpacing: '0.1em',
            color: 'black',
          }}
        >
          Matt Robillard
        </p>
      </div>
    </>
  );
};

export default Home;
