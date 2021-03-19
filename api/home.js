import { API } from './api';
import { getFooter, getMenu } from './settings';

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
