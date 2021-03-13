import Head from 'next/head';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children, title = 'Goker Blog' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <Header />
        <div> {children} </div>
        <Footer />
        <style jsx global>{`
          p {
            padding-left: 0.7em;
            color: #292929;
          }
          #root {
            background-color: #f5f5f5;
          }
          h1,
          h2,
          h3 {
            color: #292929;
          }
        `}</style>
        <style jsx>{`
          .layout {
            display: grid;
            grid-template-rows: 80px minmax(calc(100vh - 80px), max-content) minmax(
                150px,
                max-content
              );
          }
        `}</style>
      </div>
    </>
  );
};
