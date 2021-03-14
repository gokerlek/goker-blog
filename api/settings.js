import { API } from './api';

export async function getHome() {
  const page = await API.get(`home`).catch((err) => {
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

export async function getFooter() {
  return await API.get(`footer`).catch((err) => {
    console.error(err);
  });
}

export async function getMenu() {
  return await API.get(`menu`).catch((err) => {
    console.error(err);
  });
}
