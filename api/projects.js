import { API } from './api';
import { getFooter, getMenu } from './settings';
import { pathsToSlugs } from '../utils/paths-to-slugs';

export function getSlugsOfProjects() {
  return API.getList('blog').map((page) => page.replace('projects/', ''));
}

export async function getProjects() {
  const page = await API.getBatch(API.getList('projects')).catch((err) => {
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

export async function getProject(slug) {
  const page = await API.get(`projects/${slug}`).catch((err) => {
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

export async function getProjectsByPaths(paths = []) {
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
