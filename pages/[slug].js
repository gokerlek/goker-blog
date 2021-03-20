import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPage, getSlugsOfPages } from '../api/pages';
import ReactMarkdown from 'react-markdown';

const Page = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Container>
        <div>
          {page.banner ? <img src={page.banner} /> : null}
          <h1>{page.title}</h1>
          <div key={page.blocks[0].id}>
            {page.blocks[0].title ? (
              <div className="block-title">{page.blocks[0].title}</div>
            ) : null}
            {page.blocks[0].template === 'text-block' ? (
              <ReactMarkdown>{page.blocks[0].content}</ReactMarkdown>
            ) : page.blocks[1].template === 'image-block' ? (
              <img src={page.blocks[1].image} />
            ) : null}
          </div>
        </div>
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
