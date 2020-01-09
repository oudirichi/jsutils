function hashMap(collection, key) {
  return collection.reduce((acc, object) => {
    acc[object[key]] = object;

    return acc;
  }, {});
}

module.exports = {
  hashMap,
}
