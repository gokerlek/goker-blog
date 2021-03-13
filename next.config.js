const glob = require('glob');

module.exports = {
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html|\.svg$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.(jpe?g|webp|png|gif|mp4|ico)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
  exportPathMap: async function (defaultPathMap, { dir }) {
    const pagesPromise = new Promise((resolve) => {
      glob(`${dir}/cms/pages/**/*.json`, (err, pages) => {
        resolve(pages || []);
      });
    });
    const postsPromise = new Promise((resolve) => {
      glob(`${dir}/cms/blog/**/*.json`, (err, posts) => {
        resolve(posts || []);
      });
    });

    const pages = await pagesPromise;
    const posts = await postsPromise;
    const pathMap = {
      '/': { page: '/' },
    };
    pages.forEach((page) => {
      const pageName = page.replace('.json', '').split('/').pop();
      pathMap[`/${pageName}`] = { page: `/[slug]`, query: { slug: pageName } };
    });
    posts.forEach((post) => {
      const postName = post.replace('.json', '').split('/').pop();
      pathMap[`/post/${postName}`] = {
        page: `/post/[slug]`,
        query: { slug: postName },
      };
    });
    return pathMap;
  },
};
