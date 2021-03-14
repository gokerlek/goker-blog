import { idfy } from '../utils/idfy';

const context = require.context('../cms', true, /\.json$/, 'lazy');

export const API = {
  get: (path) => {
    const key = context.keys().find((key) => key.includes(`${path}.json`));
    if (key) {
      return context(key).then(idfy);
    } else {
      return Promise.resolve(null);
    }
  },
  getList: (name) => {
    return context
      .keys()
      .filter((key) => key.includes(`/${name}/`))
      .map((key) => key.replace('./', '').replace('.json', ''));
  },
  getBatch: (list = []) =>
    Promise.all(list.map(API.get)).then((results) => {
      return {
        list: results
          ? results.filter(Boolean).map((result, index) => ({
              path: list[index],
              content: idfy(result),
            }))
          : [],
        numberOfItems: (results && results.filter(Boolean).length) || 0,
      };
    }),
};
