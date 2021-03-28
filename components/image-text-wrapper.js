import { Banner } from './banner';
import { BlogPostHeader } from './blog-post-header';

export const ImageTextWrapper = ({ banner, title }) => {
  return (
    <div className="image-text-wrapper">
      <Banner small banner={banner} />
      <BlogPostHeader header={title} banner={banner} />

      <style jsx>{`
        .image-text-wrapper {
          position: relative;
        }
      `}</style>
    </div>
  );
};
