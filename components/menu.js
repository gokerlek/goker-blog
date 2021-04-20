import Link from 'next/link';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export const Menu = ({ menu }) => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <>
      <div className="menu">
        {menu.map((menuItem) => (
          <Link key={menuItem.id} href={menuItem.link}>
            {menuItem.label}
          </Link>
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
            color: ${toggle ? 'white' : '#4b6584'};
            z-index: 500;
          }

          @media screen and (max-width: 490px) {
            .menu {
              position: fixed;
              top: 0;
              right: 0;
              background: #4b6584;
              color: white;
              height: 50vh;
              width: 50%;
              flex-direction: column;
              display: ${toggle ? 'flex' : 'none'};
            }
          }
          @media screen and (min-width: 490px) {
            .plus {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};
