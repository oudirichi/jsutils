"use strict";

function indexBy(collection, key) {
  return collection.reduce(function (acc, object) {
    acc[object[key]] = object;
    return acc;
  }, {});
}

module.exports = {
  indexBy: indexBy
};