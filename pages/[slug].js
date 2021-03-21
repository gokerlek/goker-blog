import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPage, getSlugsOfPages } from '../api/pages';
import ReactMarkdown from 'react-markdown';

const Page = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Container>
        {page.banner ? <img src={page.banner} /> : null}
        <h1>{page.title}</h1>
        <div>
          {page.blocks.map((block) => (
            <div key={block.id}>
              {block.title ? <div className="block-title">{block.title}</div> : null}
              {block.template === 'text-block' ? (
                <ReactMarkdown>{block.content}</ReactMarkdown>
              ) : block.template === 'image-block' ? (
                <img src={block.image} />
              ) : null}
            </div>
          ))}
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
