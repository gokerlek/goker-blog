import { API } from './api';
import { getFooter, getMenu } from './settings';

export async function getHome() {
  const page = await API.get(`home`).catch((err) => {
    console.error(err);
  });
  page.latest_post.blog_post = {
    path: page.latest_post.blog_post.replace('.json','').replace('cms/',''), 
    content: await API.get(page.latest_post.blog_post.replace('cms','').replace('.json','')
    )}
  const menu = await getMenu();
  const footer = await getFooter();
  

  return {
    page,
    menu,
    footer,
  };
}
