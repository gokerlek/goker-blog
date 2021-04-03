import Link from 'next/link';

export const useNextPost = (page, posts) => {
  const indexNumberPath = posts.page.list;
  const indexLength = indexNumberPath.length;
  const indexNumber = indexNumberPath.findIndex(
    (index) => index.content.id === page.id,
  );
  const nextPageData =
    indexNumberPath[indexNumber + 1 === indexLength ? indexNumber : indexNumber + 1];
  const nextPageTitle = nextPageData.content.title;
  const nextPagePath = nextPageData.path.replace('blog', '');
  const nextPageId = nextPageData.content.id;

  return (
    <>
      {indexNumber + 1 === indexLength ? null : (
        <>
          <div>Next Page</div>
          <Link key={nextPageId} href={`/posts${nextPagePath}`}>
            {nextPageTitle}
          </Link>
        </>
      )}
    </>
  );
};
