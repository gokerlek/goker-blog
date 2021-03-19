import { API } from './api';
import { getFooter, getMenu } from './settings';
import { pathsToSlugs } from '../utils/paths-to-slugs';

export function getSlugsOfPages() {
  return API.getList('pages').map((page) => page.replace('pages/', ''));
}

export async function getPages() {
  const page = await API.getBatch(API.getList('pages')).catch((err) => {
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

export async function getPage(slug) {
  const page = await API.get(`pages/${slug}`).catch((err) => {
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

export async function getPagesByPaths(paths = []) {
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
