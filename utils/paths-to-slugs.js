export const pathsToSlugs = (paths) =>
  paths.map((path) => path.replace('cms/', '').replace('.json', ''));
