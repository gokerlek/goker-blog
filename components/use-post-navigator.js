export const usePostNavigor = (page, posts) => {
  const blogPost = posts.page.list;
  const length = blogPost.length;
  const indexNumber = blogPost.findIndex((index) => index.content.id === page.id);
  const nextPageData =
    blogPost[indexNumber + 1 === length ? indexNumber : indexNumber + 1];
  const nextPageTitle = nextPageData.content.title;
  const nextPagePath = nextPageData.path.replace('blog', '');
  const nextPageId = nextPageData.content.id;

  const previousPageData =
    blogPost[indexNumber - 1 === -1 ? indexNumber : indexNumber - 1];
  const previousPagePath = previousPageData.path.replace('blog', '');
  const previousPageTitle = previousPageData.content.title;
  const previousPageId = previousPageData.content.id;

  return {
    length,
    indexNumber,
    nextPageTitle,
    previousPageTitle,
    nextPageId,
    previousPageId,
    nextPagePath,
    previousPagePath,
  };
};
