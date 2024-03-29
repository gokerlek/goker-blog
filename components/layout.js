import Head from 'next/head';
import { Footer } from './footer';
import { Header } from './header';
import { ScrollToTop } from './scroll-to-top';

export const Layout = ({ children, title = 'Göker Zafer', menu, footer }) => {
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
        <ScrollToTop />
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
