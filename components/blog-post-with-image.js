import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ImageTextWrapper } from './image-text-wrapper';

export const BlogPostWithImage = ({ blog: { title, banner, summary }, path }) => {
  return (
    <>
      <Link as={path.replace('blog', 'posts')} href="/posts/[slug]">
        <div className="image-text-sum-wrapper">
          <ImageTextWrapper title={title} banner={banner} />
          {summary ? <ReactMarkdown>{summary}</ReactMarkdown> : null}
        </div>
      </Link>
      <style jsx>{`
        .image-text-sum-wrapper :global(p) {
          margin: 2em;
          line-height: 1.3em;
        }
        .image-text-sum-wrapper {
          border-radius: 10px;
          box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.07),
            0px 2.31775px 10.0172px rgba(0, 0, 0, 0.035);
          margin: 2em 0;
          overflow: hidden;
          background-color: white;
        }
      `}</style>
    </>
  );
};
export default BlogPostWithImage;
