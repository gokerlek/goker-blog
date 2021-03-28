import { RichText } from './rich-text';
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
        {banner ? <img src={banner} /> : null}
        <div className="text-wrapper">{title}</div>
        {summary ? <RichText small>{summary}</RichText> : null}
        <div className="label-container">{usedTechnology}</div>
      </div>
      <style jsx>{`
        .blog-post-with-image {
          max-width: 460px;
        }
        .label-container {
          margin-left: 1.3em;
        }

        .image-text-sum-wrapper {
          border-radius: 10px;
          box-shadow: 3px 0px 30px 0px rgba(0, 0, 0, 0.15);
          min-height: 400px;
          margin: 2em 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: white;
        }

        .text-wrapper {
          font-size: 2.5em;
          margin-top: 0.4em;
          font-weight: 600;
          line-height: 1.2em;
          text-align: center;
          color: #4b6584;
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
