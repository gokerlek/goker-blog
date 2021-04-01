import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';
import BlogPostWithImage from '../components/blog-post-with-image';

const BlogPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container small>
        {page.list.map((post) => (
          <BlogPostWithImage
            key={post.content.id}
            blog={post.content}
            path={post.path}
            goker={post}
          />
        ))}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getPosts();
  return { props };
};

export default BlogPage;
