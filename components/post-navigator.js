import { getPost, getSlugsOfPosts } from '../api/blog';
import { getPosts } from '../api/blog';
import { usePreviousPost } from './use-previous-post';
import { useNextPost } from './use-next-post';

export const PostNavigator = ({ page, posts }) => {
  const previousPost = usePreviousPost(page, posts);
  const nextPost = useNextPost(page, posts);

  return (
    <div className="post-navigator">
      <div>{previousPost}</div>
      <div>{nextPost}</div>

      <style jsx>
        {`
          .post-navigator {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #4b6584;
            font-weight: 600;
            margin: 2em 0;
            line-height: 1.7em;
          }

          .post-navigator :global(a) {
            color: #4b7bec;
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getPost(slug);
  const posts = await getPosts();
  return { props: { ...props, posts } };
};

export const getStaticPaths = async () => {
  const pages = getSlugsOfPosts();

  return {
    paths: pages.map((page) => ({ params: { slug: page } })),
    fallback: false,
  };
};

export default PostNavigator;
