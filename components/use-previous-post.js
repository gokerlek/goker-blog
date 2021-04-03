import Link from 'next/link';

export const usePreviousPost = (page, posts) => {
  const blogPost = posts.page.list;
  const indexNumber = blogPost.findIndex((index) => index.content.id === page.id);

  const previousPageData =
    blogPost[indexNumber - 1 === -1 ? indexNumber : indexNumber - 1];
  const previousPagePath = previousPageData.path.replace('blog', '');
  const previousPageTitle = previousPageData.content.title;
  const previousPageId = previousPageData.content.id;

  return (
    <>
      {indexNumber - 1 === -1 ? null : (
        <>
          Previous: <br />
          <Link key={previousPageId} href={`/posts${previousPagePath}`}>
            {`👈 ${previousPageTitle}`}
          </Link>
        </>
      )}
    </>
  );
};
