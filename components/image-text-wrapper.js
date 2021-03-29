import { Banner, BannerSize } from './banner';
import { BlogPostHeader } from './blog-post-header';

export const ImageTextWrapper = ({ banner, title }) => {
  return (
    <div className="image-text-wrapper">
      <Banner size={BannerSize.SMALL} banner={banner} />
      <BlogPostHeader header={title} banner={banner} />

      <style jsx>{`
        .image-text-wrapper {
          position: relative;
        }
      `}</style>
    </div>
  );
};
