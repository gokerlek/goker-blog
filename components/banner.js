export const BannerSize = {
  SMALL: 'small',
  XSMALL: 'xsmall',
};

export const Banner = ({ banner, size }) => {
  const getBannerSize = () => {
    switch (size) {
      case BannerSize.SMALL:
        return 16.5;
      case BannerSize.XSMALL:
        return 9;
      default:
        return 21.25;
    }
  };
  return (
    <>
      {banner ? <img src={banner} /> : null}

      <style jsx>{`
        img {
          width: 100%;
          height: ${getBannerSize()}em;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
