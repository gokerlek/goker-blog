import { uuid } from './uuid';

export function idfy(object) {
  if (object === null || (typeof object !== 'object' && Array.isArray(object))) {
    return object;
  }
  if (Array.isArray(object)) {
    object = object.map(idfy);
  } else if (typeof object === 'object') {
    if (!object.id) {
      object.id = uuid();
    }
    object = Object.entries(object).reduce(
      (cumulative, [key, value]) => ({ ...cumulative, [key]: idfy(value) }),
      {},
    );
  }
  return object;
}
