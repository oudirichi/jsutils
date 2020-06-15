function pipe(...functions) {
  return (args) => functions.reduce(async (arg, fn) => {
    return fn(await arg);
  }, args);
}

function compose(...functions) {
  return (args) => functions.reduceRight(async(arg, fn) => fn(await arg), args);
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
  }

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
  memoize,
}
