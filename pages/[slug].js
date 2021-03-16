import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPage, getSlugsOfPages } from '../api/pages';

const Page = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Container>Page</Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getPage(slug);
  return { props };
};

export const getStaticPaths = () => {
  const pages = getSlugsOfPages();

  return {
    paths: pages.map((page) => ({ params: { slug: page } })),
    fallback: false,
  };
};

export default Page;
