import { RichText } from './rich-text';
import { Banner } from './banner';

export const ProjectContent = ({
  projects: { title, thumbnail, description, projectLink },
  usedTechnology,
}) => {
  return (
    <div className="blog-post-with-image">
      <div className="image-text-sum-wrapper">
        {thumbnail ? <Banner xsmall banner={thumbnail} /> : null}
        <div className="text-wrapper">{title}</div>
        {description ? <RichText small>{description}</RichText> : null}
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
      `}</style>
    </div>
  );
};
