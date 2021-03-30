import logo from '../image/fil.png';
import Image from 'next/image';

export const Logo = ({ hasName = false, small = false }) => {
  return (
    <div className="logo">
      <Image
        src={logo}
        layout="fixed"
        width={small ? 48 : 59}
        height={small ? 48 : 59}
        alt="logo"
      />
      {hasName ? (
        <div className="text">
          Göker
          <br />
          Zafer
        </div>
      ) : null}
      <style jsx>
        {`
          .logo {
            display: flex;
            align-items: center;
          }

          .text {
            font-weight: 800;
            line-height: 2em;
            margin-left: 0.5em;
            font-size: 1.2em;
            color: #4b6584;
          }
        `}
      </style>
    </div>
  );
};
