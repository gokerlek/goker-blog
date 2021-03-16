import Link from 'next/link';
import { Container } from './container';

export const Header = ({ menu }) => {
  return (
    <div className="header">
      <Container>
        {menu.map((menuItem) => (
          <Link key={menuItem.id} href={menuItem.link}>
            {menuItem.label}
          </Link>
        ))}
      </Container>
    </div>
  );
};
