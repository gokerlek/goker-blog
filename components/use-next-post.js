import Link from 'next/link';

export const useNextPost = (page, posts) => {
  const blogPost = posts.page.list;
  const length = blogPost.length;
  const indexNumber = blogPost.findIndex((index) => index.content.id === page.id);
  const nextPageData =
    blogPost[indexNumber + 1 === length ? indexNumber : indexNumber + 1];
  const nextPageTitle = nextPageData.content.title;
  const nextPagePath = nextPageData.path.replace('blog', '');
  const nextPageId = nextPageData.content.id;

  return (
    <>
      {indexNumber + 1 === length ? null : (
        <>
          Next:
          <br />
          <Link key={nextPageId} href={`/posts${nextPagePath}`}>
            {`${nextPageTitle} 👉`}
          </Link>
        </>
      )}
    </>
  );
};
