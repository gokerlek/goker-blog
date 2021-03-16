import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';

const BlogPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container>Blog</Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getPosts();
  return { props };
};

export default BlogPage;
