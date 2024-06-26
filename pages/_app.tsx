import { GetServerSideProps } from "next";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: any) {
  console.log(pageProps);
  return (
    <main>
      <Head>
        {/* <link rel="stylesheet" href="/index.css" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style
          nonce={pageProps.nonce}
          dangerouslySetInnerHTML={{
            __html: `
        html {
          background: black;
        }

        main {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        `,
          }}
        ></style>

        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
          nonce={pageProps.nonce}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
          nonce={pageProps.nonce}
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
