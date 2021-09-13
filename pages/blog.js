import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';
import BlogPostWithImage from '../components/blog-post-with-image';
import { DateTime } from 'luxon';

const dayOfTheYear = (day) => DateTime.fromISO(day.content.publish_date).ordinal;
const BlogPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container small>
        {page.list
          .sort((a, b) => dayOfTheYear(b) - dayOfTheYear(a))
          .map((post) => (
            <BlogPostWithImage
              key={post.content.id}
              blog={post.content}
              path={post.path}
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
