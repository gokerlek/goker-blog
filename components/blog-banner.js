export const BlogBanner = ({ children, banner }) => {
  return (
    <div className="blog-banner">
      <img src={banner} />

      <style jsx>{`
        :global(img) {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
