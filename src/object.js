function isObject(object) {
  // return typeof object === 'object' && object !== null;
  return (object instanceof Object);
}

function nullToUndefined(obj) {
  if (obj === null) return undefined;
  if (!(obj instanceof Object)) return obj;

  const ret = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      ret[key] = undefined;
    } else if (obj[key] instanceof Array) {
      ret[key] = obj[key].map((item) => {
        return nullToUndefined(item);
      });
    } else if (obj[key] instanceof Object) {
      ret[key] = nullToUndefined(obj[key]);
    } else {
      ret[key] = obj[key];
    }
  });

  return ret;
}

function clean(objectToClean = {}, { recursive } = {}) {
  const mustClean = key => (recursive && (objectToClean[key] instanceof Object));
  const newObject = {};

  Object.keys(objectToClean)
    .forEach((key) => {
      if (objectToClean[key] !== undefined) {
        newObject[key] = mustClean(key) ? clean(objectToClean[key], { recursive }) : objectToClean[key];
      }
    });

  return newObject;
}

function reject(raw, rejected) {
  return Object.keys(raw)
    .filter(key => !rejected.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});
}

function only(raw, allowed) {
  return Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});
}

module.exports = {
  clean,
  isObject,
  nullToUndefined,
  reject,
  only,
}
