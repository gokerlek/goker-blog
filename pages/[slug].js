import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPage, getSlugsOfPages } from '../api/pages';
import { Blocks } from '../components/blocks';
import { PageHeader } from '../components/page-header';

const Page = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Container>
        {page.banner ? <img src={page.banner} /> : null}
        <PageHeader>{page.title}</PageHeader>
        <Blocks blocks={page.blocks} />
      </Container>
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
