import Link from 'next/link';
import { Container } from './container';
import { Logo } from './logo';

export const Header = ({ menu }) => {
  return (
    <div className="header">
      <Container>
        <div className="navbar">
          <Logo small />
          <div className="menu">
            {menu.map((menuItem) => (
              <Link key={menuItem.id} href={menuItem.link}>
                {menuItem.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>
        {`
          .header {
            background-color: white;
            box-shadow: 0px 0px 96px rgba(0, 0, 0, 0.07),
              0px 0px 12.0207px rgba(0, 0, 0, 0.035);
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            z-index: 100;
          }
          .navbar {
            display: flex;
            height: 80px;
            align-items: center;
            justify-content: space-between;
          }
          .menu {
            display: flex;
            justify-content: center;
            width: 900px;
          }
          .header :global(a) {
            margin: 20px;
            color: #4b6584;
          }
          .header :global(a):hover {
            color: #009fb7;
          }
          .header :global(a).active {
            color: #009fb7;
          }
        `}
      </style>
    </div>
  );
};
