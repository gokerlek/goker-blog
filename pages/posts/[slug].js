import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';
import { Blocks } from '../../components/blocks';
import { Banner } from '../../components/banner';
import { PageHeader } from '../../components/page-header';
import { useReadingMinutesFromBlocks } from '../../components/use-reading-minutes-from-blocks';

const BlogPost = ({ page, menu, footer }) => {
  const readingMinutesText = useReadingMinutesFromBlocks(
    page && page.blocks ? page.blocks : [],
  );
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Banner banner={page.banner} />
      <Container>
        <div key={page.key}>
          <PageHeader>{page.title}</PageHeader>
          <ReadingMinutes text={readingMinutesText} />
          <div>{page.publish_date}</div>
          <Blocks blocks={page.blocks} />
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
