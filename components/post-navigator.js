import { usePostNavigor } from './use-post-navigator';
import Link from 'next/link';

export const PostNavigator = ({ page, posts }) => {
  const {
    length,
    indexNumber,
    nextPageTitle,
    previousPageTitle,
    nextPageId,
    previousPageId,
    nextPagePath,
    previousPagePath,
  } = usePostNavigor(page, posts);

  return (
    <div className="post-navigator">
      <div>
        {indexNumber === 0 ? null : (
          <div>
            Previous: <br />
            <Link key={previousPageId} href={`/posts${previousPagePath}`}>
              {`👈 ${previousPageTitle}`}
            </Link>
          </div>
        )}
      </div>
      <div>
        {indexNumber + 1 === length ? null : (
          <div>
            Next:
            <br />
            <Link key={nextPageId} href={`/posts${nextPagePath}`}>
              {`${nextPageTitle} 👉`}
            </Link>
          </div>
        )}
      </div>

      <style jsx>
        {`
          .post-navigator {
            display: flex;
            justify-content: space-between;
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
