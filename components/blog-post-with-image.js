export const BlogPostWithImage = ({
  children,
  width = '720px',
  marg = '4.3125em',
}) => {
  return (
    <div className="blog-post-with-image">
      {children}
      <style jsx>{`
        .blog-post-with-image {
          margin: 0 auto ${marg};
          max-width: ${width};
        }
        .blog-post-with-image :global(h1) {
          color: white;
          margin: 0;
          line-height: 1.2em;
        }
        .blog-post-with-image :global(p) {
          margin: 2em;
          line-height: 1.2em;
        }
        :global(.image-text-sum-wrapper) {
          border-radius: 10px;
          box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.32);
          margin: 2em 0;
          overflow: hidden;
        }
        :global(.image-text-wrapper) {
          border-radius: 10px;
          position: relative;
        }
        :global(.text-wrapper) {
          position: absolute;
          font-size: 1.5em;
          bottom: 0;
          padding: 1em;
        }
        :global(img) {
          width: 100%;
          max-height: 16.5em;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
export default BlogPostWithImage;
