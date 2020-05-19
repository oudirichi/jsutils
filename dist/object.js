"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isObject(object) {
  return object !== null && object instanceof Object && !Array.isArray(object);
}

function nullToUndefined(obj) {
  if (obj === null) return undefined;
  if (!(obj instanceof Object)) return obj;
  const ret = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] === null) {
      ret[key] = undefined;
    } else if (obj[key] instanceof Array) {
      ret[key] = obj[key].map(item => {
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

function clean(objectToClean = {}, {
  recursive
} = {}) {
  const mustClean = key => recursive && objectToClean[key] instanceof Object;

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

function reject(raw, rejected) {
  return Object.keys(raw).filter(key => !rejected.includes(key)).reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});
}

function only(raw, allowed) {
  if (!Array.isArray(allowed)) allowed = [allowed];
  return Object.keys(raw).filter(key => allowed.includes(key)).reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});
}

function every(obj, keys) {
  if (!Array.isArray(keys)) keys = [keys];
  return keys.every(item => Object.prototype.hasOwnProperty.call(obj, item));
}

function map(object, fn) {
  return Object.keys(object).map(key => fn(object[key], key));
}

const ret = {
  clean,
  every,
  map,
  isObject,
  nullToUndefined,
  reject,
  only
};

function Obj(object) {
  let inner = _objectSpread({}, object);

  Object.keys(ret).forEach(fnName => {
    this[fnName] = (...args) => {
      const result = ret[fnName](inner, ...args);
      inner = result;
      return this;
    };
  });

  this.value = () => {
    return inner;
  };
}

module.exports = _objectSpread({}, ret, {
  Obj
});