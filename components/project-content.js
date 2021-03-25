import ReactMarkdown from 'react-markdown';
export const ProjectContent = ({
  title,
  usedTechnology,
  summary,
  banner,
  children,
}) => {
  return (
    <div className="blog-post-with-image">
      {children}
      <div className="image-text-sum-wrapper">
        <div className="image-text-wrapper">
          {banner ? <img src={banner} /> : null}
          <div className="text-wrapper">
            <h2>{title}</h2>
          </div>
        </div>
        <div>{summary ? <ReactMarkdown>{summary}</ReactMarkdown> : null}</div>
        <div>{usedTechnology}</div>
      </div>
      <style jsx>{`
        .blog-post-with-image {
          max-width: 460px;
        }
        .blog-post-with-image :global(h2) {
          color: #4b6584;
          margin: 0.2em;
          font-weight: 600;
          line-height: 1.2em;
          text-align: center;
        }
        .blog-post-with-image :global(h6) {
          color: white;
          padding: 0.5em 0.5em 0.5em 1em;
          border-radius: 4px;
          background-color: #0fb9b1;
          font-weight: 300;
          line-height: 1.2em;
          text-align: center;
          margin: 0;
        }
        .blog-post-with-image :global(p) {
          margin: 0.5em 1em;
          line-height: 1.2em;
        }
        :global(.image-text-sum-wrapper) {
          border-radius: 10px;
          box-shadow: 3px 0px 30px 0px rgba(0, 0, 0, 0.15);
          min-height: 400px;
          margin: 2em 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        :global(.image-text-wrapper) {
          border-radius: 10px;
        }
        :global(.text-wrapper) {
          font-size: 1.5em;
          bottom: 0;
        }
        :global(img) {
          width: 100%;
          max-height: 9em;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
