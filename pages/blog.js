import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const BlogPage = ({ page, menu, footer }) => {
  console.log(page);
  return (
    <Layout title="Göker Blog" footer={footer} menu={menu.menuItems}>
      <Container>
        {page.list.map((post) => (
          <Link key={post.id} as={post.path} href="/blog/[slug]">
            <div>
              {post.content.banner ? <img src={post.content.banner} /> : null}
              <div>{post.content.title}</div>
              <div>
                {post.content.summary ? (
                  <ReactMarkdown>{post.content.summary}</ReactMarkdown>
                ) : null}
              </div>
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
