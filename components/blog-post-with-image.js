import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const BlogPostWithImage = ({
  children,
  blog: { title, banner, summary },
  path,
}) => {
  return (
    <Link as={path.replace('blog', 'posts')} href="/posts/[slug]">
      <div className="blog-post-with-image">
        {children}
        <div className="image-text-sum-wrapper">
          <div className="image-text-wrapper">
            {banner ? <img src={banner} /> : null}
            <div className="text-wrapper">
              <h1>{title}</h1>
            </div>
          </div>
          <div>{summary ? <ReactMarkdown>{summary}</ReactMarkdown> : null}</div>
        </div>
        <style jsx>{`
          .blog-post-with-image {
            width: 100%;
          }
          .blog-post-with-image :global(h1) {
            color: white;
            font-size: 2em;
            margin: 0;
            line-height: 1.2em;
          }
          .blog-post-with-image :global(p) {
            margin: 2em;
            line-height: 1.2em;
          }
          :global(.image-text-sum-wrapper) {
            border-radius: 10px;
            box-shadow: 3px 0px 30px 0px rgba(0, 0, 0, 0.15);
            margin: 2em 0;
            overflow: hidden;
            background-color: white;
          }
          :global(.image-text-wrapper) {
            border-radius: 10px;
            position: relative;
          }
          :global(.text-wrapper) {
            position: absolute;
            font-size: 1.5em;
            bottom: 0;
            padding: 1em;
          }
          :global(img) {
            width: 100%;
            max-height: 16.5em;
            object-fit: cover;
          }
        `}</style>
      </div>
    </Link>
  );
};
export default BlogPostWithImage;
