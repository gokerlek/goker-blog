import { API } from './api';

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
