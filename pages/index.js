import { Layout } from '../components/layout';
import Link from 'next/link';
import { Container } from '../components/container';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Link href="/day1">Latest post</Link>
      </Container>
    </Layout>
  );
}
