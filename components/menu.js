import Link from 'next/link';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Menu = ({ menu }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const toggler = () => setToggle(!toggle);

  return (
    <>
      <div className="menu">
        {menu.map((menuItem) => (
          <div
            key={menuItem.id}
            className={
              router.asPath === menuItem.link ? 'menu-item-active' : 'menu-item'
            }>
            <Link key={menuItem.id} href={menuItem.link}>
              {menuItem.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="plus" onClick={toggler}>
        {toggle ? <FaTimes size="5vh" /> : <FaPlus size="5vh" />}
      </div>
      <style jsx>
        {`
          .menu {
            display: flex;
            justify-content: center;
            width: 900px;
            cursor: pointer;
          }

          .plus {
            z-index: 500;
          }

          :global(.menu a) {
            margin: 20px;
          }

          :global(.menu-item-active a),
          :global(.menu a:hover) {
            color: #009fb7;
          }

          :global(.menu-item a) {
            color: #4b6584;
          }

          @media screen and (max-width: 490px) {
            .menu {
              position: fixed;
              top: 0;
              right: 0;
              background: #4b6584;
              color: white;
              height: 100vh;
              width: 100%;
              flex-direction: column;
              align-items: center;
            }

            :global(.menu a) {
              margin: 20px;
              color: white;
              font-size: 1.5em;
              font-weight: 600;
              padding: 30px;
            }

            :global(.menu a:hover) {
              color: black;
            }
            .menu-item-active,
            .menu-item {
              margin: 20px;
            }
          }

          @media screen and (min-width: 490px) {
            .plus {
              display: none;
            }
          }
        `}
      </style>

      <style jsx>
        {`
          .plus {
            color: ${toggle ? 'white' : '#4b6584'};
          }

          @media screen and (max-width: 490px) {
            .menu {
              display: ${toggle ? 'flex' : 'none'};
            }
          }
        `}
      </style>
    </>
  );
};
