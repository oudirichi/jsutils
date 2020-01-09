function pipe(...functions) {
  return (args) => functions.reduce((arg, fn) => fn(arg), args);
}

function compose(...functions) {
  return (args) => functions.reduceRight((arg, fn) => fn(arg), args);
}


module.exports = {
  compose,
  pipe,
}
