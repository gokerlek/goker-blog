import { Layout } from '../components/layout';
import Link from 'next/link';
import { Container } from '../components/container';
import { getHome } from '../api/home';
import ReactMarkdown from 'react-markdown';
import { Code } from '../components/code';
import BlogPostWithImage from '../components/blog-post-with-image';

const Home = ({ page, menu, footer }) => {
  return (
    <Layout footer={footer} menu={menu.menuItems}>
      <Container width="960px">
        <h1>{page.title}</h1>
        <div>
          <h3>{page.intro.title}</h3>
          <ReactMarkdown>{page.intro.detail}</ReactMarkdown>
        </div>
        <div>
          <h3>{page.latest_post.title}</h3>
          <ReactMarkdown>{page.latest_post.description}</ReactMarkdown>
          <BlogPostWithImage width="960px">
            <Link
              as={page.latest_post.blog_post.path.replace('blog', 'posts')}
              href="/posts/[slug]">
              <div className="image-text-sum-wrapper">
                <div className="image-text-wrapper">
                  {page.latest_post.blog_post.content.banner ? (
                    <img src={page.latest_post.blog_post.content.banner} />
                  ) : null}
                  <div className="text-wrapper">
                    <h1>{page.latest_post.blog_post.content.title}</h1>
                  </div>
                </div>
                <div>
                  {page.latest_post.blog_post.content.summary ? (
                    <ReactMarkdown>
                      {page.latest_post.blog_post.content.summary}
                    </ReactMarkdown>
                  ) : null}
                </div>
              </div>
            </Link>
          </BlogPostWithImage>
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

export const getStaticProps = async () => {
  const props = await getHome();
  return { props };
};

export default Home;
