function indexBy(collection, key) {
  return collection.reduce((acc, object) => {
    acc[object[key]] = object;

    return acc;
  }, {});
}

module.exports = {
  indexBy,
}
