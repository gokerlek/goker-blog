export const Banner = ({ banner, small = false, xsmall = false }) => {
  return (
    <>
      {banner ? <img src={banner} /> : null}

      <style jsx>{`
        img {
          width: 100%;
          height: ${small ? 16.5 : xsmall ? 9 : 21.25}em;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
