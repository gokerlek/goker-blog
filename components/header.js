import Link from 'next/link';
import { Container } from './container';
export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Link href="/"> Home</Link>
        <Link href="/projects"> Projects</Link>
        <Link href="/contact"> Contact</Link>
      </Container>
    </div>
  );
};
