// <lastmod>${latestPost}</lastmod>

// pages/sitemap.xml.js
import { API } from '../api/api';

const createSitemap = (pages = [], posts = []) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.gokerzafer.com/</loc>
      </url>
      <url>
        <loc>https://www.gokerzafer.com/blog</loc>
      </url>
      <url>
        <loc>https://www.gokerzafer.com/projects</loc>
      </url>
      ${pages
        .map(
          (page) => `<url>
        <loc>https://www.gokerzafer.com/${page}</loc>
      </url>`,
        )
        .join('')}
      ${posts
        .map(
          (postPath) => `<url>
        <loc>https://www.gokerzafer.com/${postPath.replace('blog/', 'post/')}</loc>
      </url>`,
        )
        .join('')}
    </urlset>`;
};

const Sitemap = () => null;

export default Sitemap;

export const getServerSideProps = ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  const posts = API.getList('blog');
  const pages = API.getList('pages');
  res.write(createSitemap(posts, pages));
  res.end();
  return { props: {} };
};
