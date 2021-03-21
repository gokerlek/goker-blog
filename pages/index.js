import { Layout } from '../components/layout';
import Link from 'next/link';
import { Container } from '../components/container';
import { getHome } from '../api/home';
import ReactMarkdown from 'react-markdown';
import { Code } from '../components/code';

const Home = ({ page, menu, footer }) => {
  console.log(page);
  return (
    <Layout footer={footer} menu={menu.menuItems}>
      <Container>
        <h1>{page.title}</h1>
        <div key={page.intro.id}>
          <h3>{page.intro.title}</h3>
          <ReactMarkdown>{page.intro.detail}</ReactMarkdown>
        </div>
        <div key={page.latest_post.id}>
          <h3>{page.latest_post.title}</h3>
          <ReactMarkdown>{page.latest_post.description}</ReactMarkdown>
          <Link
            as={page.latest_post.blog_post.path.replace('blog', 'posts')}
            href="/posts/[slug]">
            <div>
              {page.latest_post.blog_post.content.banner ? (
                <img src={page.latest_post.blog_post.content.banner} />
              ) : null}
              <div>{page.latest_post.blog_post.content.title}</div>
              <div>
                {page.latest_post.blog_post.content.summary ? (
                  <ReactMarkdown>
                    {page.latest_post.blog_post.content.summary}
                  </ReactMarkdown>
                ) : null}
              </div>
            </div>
          </Link>
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
