import { Layout } from '../components/layout';
import Link from 'next/link';
import { Container } from '../components/container';
import { getHome } from '../api/home';

const Home = ({ props, menu, footer }) => {
  console.log(props);
  return (
    <Layout footer={footer} menu={menu.menuItems}>
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
