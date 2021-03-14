import Link from 'next/link';
import { Container } from './container';
import menu from '../cms/menu.json';

export const Header = (props) => {
  console.log(props);

  return (
    <div className="header">
      <Container>
        <img src="" />
        <div className="navbar">
          {menu.menuItems.map((item) => (
            <Link href={item.link}>{item.label}</Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
