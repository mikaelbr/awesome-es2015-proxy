module.exports = function checkApi (obj, threshold = 5) {
  return new Proxy(obj, {
    get(target, property) {
      const existingFn = Reflect.get(target, property);
      if (typeof existingFn !== 'undefined') return existingFn;
      if (typeof property !== 'string') return existingFn;
      const possibleKeys = getCloseApi(target, property, threshold);

      if (!possibleKeys.length) {
        console.warn(new TypeError(`${property.toString()} is not a function. Could not find any similar`));
        return existingFn;
      }
      const [{ methodName }, ...rest] = possibleKeys;
      if (possibleKeys.length === 1) {
        console.warn(new TypeError(`${property.toString()} is not a function. Did you mean ${methodName}?`));
        return existingFn;
      }
      const restNames = rest.map(({methodName}) => methodName).join(',');
      console.warn(new TypeError(
        `${property.toString()} is not a function. Did you mean ${methodName}?`
        + ` Or maybe any of the following: ${restNames}?`
      ));
      return existingFn;
    }
  });
};

const levenshtein = require('fast-levenshtein');

function getCloseApi (target, method, threshold) {
  const keys = Reflect.ownKeys(target).concat(
    Reflect.ownKeys(Reflect.getPrototypeOf(target))
  ).filter(m => typeof target[m] === 'function');
  return keys.map(m => ({
      distance: levenshtein.get(m, method),
      methodName: m
    }))
    .sort((a, b) => a.distance - b.distance)
    .filter(o => o.distance < threshold);
}
