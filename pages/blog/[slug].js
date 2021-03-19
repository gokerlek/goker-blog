import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';

const BlogPost = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Container>Blog Post</Container>
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
