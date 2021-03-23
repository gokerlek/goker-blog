import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import BlogPostWithImage from '../components/blog-post-with-image';

const BlogPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container>
        <BlogPostWithImage>
          {page.list.map((post) => (
            <Link
              key={post.id}
              as={post.path.replace('blog/', 'posts/')}
              href="/posts/[slug]">
              <div className="image-text-sum-wrapper">
                <div className="image-text-wrapper">
                  {post.content.banner ? <img src={post.content.banner} /> : null}
                  <div className="text-wrapper">
                    <h1>{post.content.title}</h1>
                  </div>
                </div>
                <div>
                  {post.content.summary ? (
                    <ReactMarkdown>{post.content.summary}</ReactMarkdown>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </BlogPostWithImage>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getPosts();
  return { props };
};

export default BlogPage;
