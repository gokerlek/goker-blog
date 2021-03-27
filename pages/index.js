import { Layout } from '../components/layout';
import { Blocks } from '../components/blocks';
import { Container } from '../components/container';
import { getHome } from '../api/home';
import { RichText } from '../components/rich-text';
import BlogPostWithImage from '../components/blog-post-with-image';
import { PageHeader } from '../components/page-header';

const Home = ({ page, menu, footer }) => {
  return (
    <Layout footer={footer} menu={menu.menuItems}>
      <Container>
        <PageHeader>{page.title}</PageHeader>
        <h3>{page.intro.title}</h3>
        <RichText>{page.intro.detail}</RichText>
        <h3>{page.latest_post.title}</h3>
        <RichText>{page.latest_post.description}</RichText>
        <BlogPostWithImage
          blog={page.latest_post.blog_post.content}
          path={page.latest_post.blog_post.path}
        />
        <Blocks blocks={page.blocks} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getHome();
  return { props };
};

export default Home;
