import { Banner, BannerSize } from './banner';
import { BlogPostHeader } from './blog-post-header';

export const ImageTextWrapper = ({ banner, title }) => {
  return (
    <div className="image-text-wrapper">
      <Banner size={BannerSize.SMALL} banner={banner} />
      <div className="image-box__overlay"></div>
      <BlogPostHeader header={title} banner={banner} />

      <style jsx>{`
        .image-text-wrapper {
          position: relative;
        }

        .image-box__overlay {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 5px;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};
