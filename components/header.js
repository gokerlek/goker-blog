import Link from 'next/link';
import { Container } from './container';

export const Header = ({ menu }) => {
  return (
    <div className="header">
      <Container menu={menu}></Container>
    </div>
  );
};
