import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';
import ReactMarkdown from 'react-markdown';
import { Code } from '../../components/code';
import { BlogBanner } from '../../components/blog-banner';

const BlogPost = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <BlogBanner banner={page.banner} />
      <Container>
        <div key={page.key}>
          <h1>{page.title}</h1>
          <div>{page.publish_date}</div>
          <div>
            {page.blocks.map((block) => (
              <div key={block.id}>
                {block.title ? (
                  <div className="block-title">{block.title}</div>
                ) : null}
                {block.template === 'code-block' ? (
                  <Code language={block.language}>{block.code}</Code>
                ) : block.template === 'text-block' ? (
                  <ReactMarkdown>{block.content}</ReactMarkdown>
                ) : block.template === 'image-block' ? (
                  <img src={block.image} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getPost(slug);
  return { props };
};

export const getStaticPaths = async () => {
  const pages = getSlugsOfPosts();

  return {
    paths: pages.map((page) => ({ params: { slug: page } })),
    fallback: false,
  };
};

export default BlogPost;
