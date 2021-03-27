export const BlogPostHeader = ({ header }) => {
  return (
    <div className="blog-post-header">
      {header}

      <style jsx>{`
        .blog-post-header {
          position: absolute;
          bottom: 0;
          color: white;
          font-size: 3.5em;
          font-weight: 800;
          margin: 0.5em 0.5em;
          line-height: 1.2em;
        }
      `}</style>
    </div>
  );
};
