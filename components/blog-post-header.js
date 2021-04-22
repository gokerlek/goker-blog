export const BlogPostHeader = ({ header, banner }) => {
  return (
    <div className="blog-post-header">
      {header}

      <style jsx>{`
        .blog-post-header {
          position: ${banner ? 'absolute' : 'initial'};
          bottom: 0;
          color: ${banner ? 'white' : '#4b6584'};
          font-size: 3.5em;
          font-weight: 800;
          margin: 0.5em 0.5em;
          line-height: 1.2em;
        }
        @media screen and (max-width: 670px) {
          .blog-post-header {
            font-size: 3em;
            line-height: 1em;
          }
        }
        @media screen and (max-width: 490px) {
          .blog-post-header {
            font-size: 2.1em;
            line-height: 1em;
          }
        }
      `}</style>
    </div>
  );
};
