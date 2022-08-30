const Fonts: React.FC = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @font-face {
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/Barlow/Barlow-Regular.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/Barlow/Barlow-Medium.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/fonts/Barlow/Barlow-SemiBold.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/Barlow/Barlow-Bold.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Roboto Mono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/RobotoMono/RobotoMono-Bold.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Roboto Mono';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/RobotoMono/RobotoMono-Medium.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Test Tiempos Headline';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('/fonts/TestTiemposHeadline/TestTiemposHeadline-Light.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Test Tiempos Headline';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url('/fonts/TestTiemposHeadline/TestTiemposHeadline-LightItalic.woff2') format('woff2');
        }

        * {
          outline: none;
        }

        html {
          font-size: 62.5%;
        }

        html,
        body,
        #__next {
          background: #f2f7f7;
        }

        #__next {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `,
    }}
  />
);

export default Fonts;
