import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';
import { Blocks } from '../../components/blocks';
import { Banner } from '../../components/banner';
import { PageHeader } from '../../components/page-header';
import { useReadingMinutesFromBlocks } from '../../components/use-reading-minutes-from-blocks';
import { ReadingMinutes } from '../../components/reading-minutes';
import { getPosts } from '../../api/blog';
import { PostNavigator } from '../../components/post-navigator';
import { PublishDate } from '../../components/publish-date';
import { usePublishDate } from '../../components/usePublishDate';

const BlogPost = ({ page, menu, footer, posts }) => {
  const readingMinutesText = useReadingMinutesFromBlocks(page.blocks);
  const publishDate = page.publish_date ? usePublishDate(page.publish_date) : null;
  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Banner banner={page.banner} />
      <Container small>
        <div key={page.key}>
          <PageHeader>{page.title}</PageHeader>
          <ReadingMinutes text={readingMinutesText} />
          {publishDate ? <PublishDate time={publishDate} /> : null}
          <Blocks blocks={page.blocks} />
          <PostNavigator page={page} posts={posts} />
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getPost(slug);
  const posts = await getPosts();
  return { props: { ...props, posts } };
};

export const getStaticPaths = async () => {
  const pages = getSlugsOfPosts();

  return {
    paths: pages.map((page) => ({ params: { slug: page } })),
    fallback: false,
  };
};

export default BlogPost;
