"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pipe(...functions) {
  return args => functions.reduce(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(function* (arg, fn) {
      return fn((yield arg));
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), args);
}

function compose(...functions) {
  return args => functions.reduceRight(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (arg, fn) {
      return fn((yield arg));
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(), args);
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function dd(...args) {
  console.log(...args);
  process.exit(1);
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function memoize(cb) {
  const cached = {};

  const fn = (...args) => {
    const key = JSON.stringify(args);

    if (!cached[key]) {
      cached[key] = cb(...args);
    }

    return cached[key];
  };

  fn.cached = cached;
  fn.original = cb;
  return fn;
}

module.exports = {
  compose,
  pipe,
  dd,
  getType,
  isSameType,
  memoize
};