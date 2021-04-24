import { Container } from './container';
import { Logo } from './logo';
import { Menu } from './menu';

export const Header = ({ menu }) => {
  return (
    <div className="header">
      <Container>
        <div className="navbar">
          <Logo small />
          <Menu menu={menu} />
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
        `}
      </style>
    </div>
  );
};
