import Link from 'next/link';

export const useNextPost = (page, posts) => {
  const indexNumberPath = posts.page.list;
  const indexLength = indexNumberPath.length;
  const indexNumber = indexNumberPath.findIndex(
    (index) => index.content.id === page.id,
  );
  const path = indexNumberPath[
    indexNumber + 1 === indexLength ? indexNumber : indexNumber + 1
  ].path.replace('blog', '');

  return (
    <>
      {indexNumber + 1 === indexLength ? null : (
        <Link href={`/posts${path}`}> Next Post </Link>
      )}
    </>
  );
};
