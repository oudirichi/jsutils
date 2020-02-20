function pipe(...functions) {
  return (args) => functions.reduce((arg, fn) => fn(arg), args);
}

function compose(...functions) {
  return (args) => functions.reduceRight((arg, fn) => fn(arg), args);
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

// function memoize(fn) {
//   const cache = {};

//   return (...args) => {
//     const params = JSON.stringify(args);
//     if (!cache[params]) cache[params] = fn(...args);

//     return cache[params];
//   };
// }

module.exports = {
  compose,
  pipe,
  getType,
  isSameType,
  // memoize,
}
