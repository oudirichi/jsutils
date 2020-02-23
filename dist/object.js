function isObject(object) {
  return typeof object === 'object' && object !== null;
}

function clean(objectToClean = {}, {
  recursive
} = {}) {
  const mustClean = key => recursive && isObject(objectToClean[key]);

  const newObject = {};
  Object.keys(objectToClean).forEach(key => {
    if (objectToClean[key] !== undefined) {
      newObject[key] = mustClean(key) ? clean(objectToClean[key], {
        recursive
      }) : objectToClean[key];
    }
  });
  return newObject;
}

module.exports = {
  clean,
  isObject
};