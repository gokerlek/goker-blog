import { Layout } from '../components/layout';
import Link from 'next/link';
import { Container } from '../components/container';
import { getHome } from '../api/home';

const Home = (props) => {
  console.log(props);
  return (
    <Layout>
      <Container>
        <Link href="/day1">Latest post</Link>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getHome();
  return { props };
};

export default Home;
