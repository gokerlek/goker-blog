import Link from 'next/link';

export const usePreviousPost = (page, posts) => {
  const indexNumberPath = posts.page.list;
  const indexNumber = indexNumberPath.findIndex(
    (index) => index.content.id === page.id,
  );
  const path = indexNumberPath[
    indexNumber - 1 === -1 ? indexNumber : indexNumber - 1
  ].path.replace('blog', '');

  return (
    <>
      {indexNumber - 1 === -1 ? null : (
        <Link href={`/posts${path}`}> Previous Post </Link>
      )}
    </>
  );
};
