"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function isObject(object) {
  return (0, _typeof2["default"])(object) === 'object' && object !== null;
}

function clean() {
  var objectToClean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      recursive = _ref.recursive;

  var mustClean = function mustClean(key) {
    return recursive && isObject(objectToClean[key]);
  };

  var newObject = {};
  Object.keys(objectToClean).forEach(function (key) {
    if (objectToClean[key] !== undefined) {
      newObject[key] = mustClean(key) ? clean(objectToClean[key], {
        recursive: recursive
      }) : objectToClean[key];
    }
  });
  return newObject;
}

module.exports = {
  clean: clean,
  isObject: isObject
};