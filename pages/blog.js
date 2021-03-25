import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';
import Link from 'next/link';
import BlogPostWithImage from '../components/blog-post-with-image';

const BlogPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container>
        {page.list.map((post) => (
          <Link
            key={post.id}
            as={post.path.replace('blog/', 'posts/')}
            href="/posts/[slug]">
            <div>
              <BlogPostWithImage
                title={post.content.title}
                banner={post.content.banner}
                summary={post.content.summary}
              />
            </div>
          </Link>
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
