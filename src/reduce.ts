import isObject from "./isObject";

function reduce(item, fn, startAcc=[]) {
  if (isObject(item)) {
    return Object.entries(item).reduce((acc, [k, v]) => fn(acc, v, k), startAcc);
  } else {
    return item.reduce((acc, v, k) => fn(acc, v, k), startAcc);
  }
}

export = reduce;
