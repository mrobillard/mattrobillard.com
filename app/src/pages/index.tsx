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
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
          background: '#f2f7f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Tiempos',
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '32px',
            letterSpacing: '0.05em',
            color: 'black',
            margin: '20px'
          }}
        >
          Matt Robillard
        </h1>
        <hr
          style={{
            height: '2px',
            width: '300px',
            margin: '10px'
          }}
        />
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
          contact@mattrobillard.com
        </p>
      </div>
    </>
  );
};

export default Home;
