"use strict";

function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (args) {
    return functions.reduce(function (arg, fn) {
      return fn(arg);
    }, args);
  };
}

function compose() {
  for (var _len2 = arguments.length, functions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    functions[_key2] = arguments[_key2];
  }

  return function (args) {
    return functions.reduceRight(function (arg, fn) {
      return fn(arg);
    }, args);
  };
}

function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
} // function memoize(fn) {
//   const cache = {};
//   return (...args) => {
//     const params = JSON.stringify(args);
//     if (!cache[params]) cache[params] = fn(...args);
//     return cache[params];
//   };
// }


module.exports = {
  compose: compose,
  pipe: pipe,
  getType: getType,
  isSameType: isSameType // memoize,

};