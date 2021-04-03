import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { getPost, getSlugsOfPosts } from '../../api/blog';
import { Blocks } from '../../components/blocks';
import { Banner } from '../../components/banner';
import { PageHeader } from '../../components/page-header';
import { useReadingMinutesFromBlocks } from '../../components/use-reading-minutes-from-blocks';
import { ReadingMinutes } from '../../components/reading-minutes';
import { getPosts } from '../../api/blog';
import { usePreviousPost } from '../../components/use-previous-post';
import { useNextPost } from '../../components/use-next-post';

const BlogPost = ({ page, menu, footer, posts }) => {
  const previousPost = usePreviousPost(page, posts);
  const nextPost = useNextPost(page, posts);
  const readingMinutesText = useReadingMinutesFromBlocks(page.blocks);
  console.log(posts);

  return (
    <Layout menu={menu.menuItems} footer={footer}>
      <Banner banner={page.banner} />
      <Container>
        <div key={page.key}>
          <PageHeader>{page.title}</PageHeader>
          <ReadingMinutes text={readingMinutesText} />
          <div>{page.publish_date}</div>
          <Blocks blocks={page.blocks} />
          {previousPost}
          {nextPost}
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
