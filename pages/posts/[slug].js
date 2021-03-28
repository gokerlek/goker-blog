import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';
import { Blocks } from '../../components/blocks';
import { BlogBanner } from '../../components/blog-banner';
import { PageHeader } from '../../components/page-header';

const BlogPost = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <BlogBanner banner={page.banner} />
      <Container>
        <div key={page.key}>
          <PageHeader>{page.title}</PageHeader>
          <div>{page.publish_date}</div>
          <div>
            <Blocks blocks={page.blocks} />
          </div>
        </div>
      </Container>
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
