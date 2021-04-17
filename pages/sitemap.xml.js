// <lastmod>${latestPost}</lastmod>

// pages/sitemap.xml.js
import React from 'react';
import { API } from '../api/api';

const createSitemap = (posts = []) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.gokerzafer.com/</loc>
      </url>
      ${`
           
      ${posts.menu.menuItems.link
        .map(
          (page) => `<url>
        <loc>https://www.gokerzafer.com/${page}</loc>
      </url>`,
        )
        .join('')}
      ${posts.page.list.path
        .map(
          (post) => `<url>
        <loc>https://www.gokerzafer.com/${post.replace('blog/', 'post/')}</loc>
      </url>`,
        )
        .join('')}
      `}
    </urlset>`;

const Sitemap = () => null;

export default Sitemap;

export const getServerSideProps = ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  const posts = API.getList('blog');
  res.write(createSitemap(posts));
  res.end();
  return { props: {} };
};
