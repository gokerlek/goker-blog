import { PageHeader } from '../components/page-header';
import { ProjectContent } from '../components/project-content';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getPosts } from '../api/blog';

const BlogPage = (props) => {
  console.log(props);

  return (
    <Layout title="Göker Blog">
      <Container>Blog</Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getPosts();
  return { props };
};

export default BlogPage;
