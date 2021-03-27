import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BlogPostHeader } from './blog-post-header';
import { BlogBanner } from './blog-banner';

export const BlogPostWithImage = ({ blog: { title, banner, summary }, path }) => {
  return (
    <>
      <Link as={path.replace('blog', 'posts')} href="/posts/[slug]">
        <div className="image-text-sum-wrapper">
          <div className="image-text-wrapper">
            <BlogBanner small banner={banner} />
            <BlogPostHeader header={title} />
          </div>
          {summary ? <ReactMarkdown>{summary}</ReactMarkdown> : null}
        </div>
      </Link>
      <style jsx>{`
        .image-text-sum-wrapper :global(p) {
          margin: 2em;
          line-height: 1.2em;
        }
        .image-text-sum-wrapper {
          border-radius: 10px;
          filter: drop-shadow(0px 18px 80px rgba(0, 0, 0, 0.07));
          margin: 2em 0;
          overflow: hidden;
          background-color: white;
        }
        .image-text-wrapper {
          position: relative;
        }
      `}</style>
    </>
  );
};
export default BlogPostWithImage;
