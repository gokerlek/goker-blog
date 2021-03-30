import Link from 'next/link';
import { ImageTextWrapper } from './image-text-wrapper';
import { ReadingMinutes } from './reading-minutes';
import { RichText } from './rich-text';

export const BlogPostWithImage = ({
  blog: { title, banner, summary, blocks },
  path,
}) => {
  return (
    <>
      <Link as={path.replace('blog', 'posts')} href="/posts/[slug]">
        <div className="image-text-sum-wrapper">
          <ImageTextWrapper title={title} banner={banner} />
          <ReadingMinutes text={summary} />
          {summary ? <RichText>{summary}</RichText> : null}
        </div>
      </Link>

      <style jsx>{`
        .image-text-sum-wrapper {
          border-radius: 10px;
          box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.07),
            0px 2.31775px 10.0172px rgba(0, 0, 0, 0.035);
          margin: 2em 0;
          overflow: hidden;
          background-color: white;
        }

        .image-text-sum-wrapper :global(p) {
          margin: 1.5em 2em;
        }
      `}</style>
    </>
  );
};
export default BlogPostWithImage;
