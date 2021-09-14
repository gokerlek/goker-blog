import { RichText } from './rich-text';
import { Banner, BannerSize } from './banner';
import { Label } from './label';

export const ProjectContent = ({
  projects: { title, thumbnail, description, projectLink, technologies },
}) => {
  return (
    <div className="blog-post-with-image">
      <div className="image-text-sum-wrapper">
        {thumbnail ? <Banner size={BannerSize.XSMALL} banner={thumbnail} /> : null}
        <div className="text-wrapper">{title}</div>
        {description ? <RichText small>{description}</RichText> : null}
        <div className="label-container">
          {technologies.map((technology) => (

            <Label key={technology}>{technology}</Label>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blog-post-with-image {
          margin: 1em 0;
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

        .image-text-sum-wrapper :global(p) {
          margin: 1.5em 2em;
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
