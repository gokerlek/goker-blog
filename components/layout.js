import Head from 'next/head';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children, title = 'Goker Blog', menu, footer }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <Header menu={menu} />
        <div>{children}</div>
        <Footer footer={footer} />
        <style jsx global>{`
          p {
            color: #292929;
          }

          #root {
            background-color: #e5e5e5;
          }

          h2,
          h3 {
            color: #4b6584;
          }

          h3 {
            font-weight: 800;
            font-size: 1.2em;
            line-height: 2em;
            color: #4b6584;
          }
        `}</style>
        <style jsx>{`
          .layout {
            padding-top: 80px;
            display: grid;
            grid-template-rows: minmax(calc(100vh - 80px), max-content) minmax(
                330px,
                max-content
              );
            background-color: #ffffff;
          }
        `}</style>
      </div>
    </>
  );
};
