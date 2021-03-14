import { API } from './api';
import { getFooter, getMenu } from './settings';
import { pathsToSlugs } from '../utils/paths-to-slugs';

export function getSlugsOfPosts() {
  return API.getList('blog').map((page) => page.replace('blog/', ''));
}

export async function getPosts() {
  const page = await API.getBatch(API.getList('blog')).catch((err) => {
    console.error(err);
  });

  const menu = await getMenu();
  const footer = await getFooter();
  return {
    page,
    menu,
    footer,
  };
}

export async function getPost(slug) {
  const page = await API.get(`blog/${slug}`).catch((err) => {
    console.error(err);
  });

  const menu = await getMenu();
  const footer = await getFooter();
  return {
    page,
    menu,
    footer,
  };
}

export async function getPostsByPaths(paths = []) {
  const slugs = pathsToSlugs(paths);
  const page = await API.getBatch(slugs).catch((err) => {
    console.error(err);
  });

  const menu = await getMenu();
  const footer = await getFooter();
  return {
    page,
    menu,
    footer,
  };
}
