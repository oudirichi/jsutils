function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function concat(arr1, ...arrs) {
  return uniq(arr1.concat(...arrs));
}

// function intersect(arr1, arr2) {
//   const indexed = arr2.reduce((acc, item) => { acc[item] = item; return acc; }, {});
//   return Array.from(new Set(arr1.filter((value) => value in indexed)));
//   //return arr1.filter((value) => arr2.includes(value)); // not fast
// }

function intersect(arr1, ...arrs) {
  if (arrs.length === 0) return arr1;

  const arr2 = intersect(arrs[0], ...arrs.slice(1));

  const indexed = arr2.reduce((acc, item) => { acc[item] = item; return acc; }, {});
  return uniq(arr1.filter((value) => value in indexed));
}

function left(arr1, ...arrs) {
  const all = concat(...arrs);

  const indexed = all.reduce((acc, item) => { acc[item] = item; return acc; }, {});

  return uniq(arr1.filter((value) => !(value in indexed)));
}

module.exports = {
  range,
  concat,
  left,
  uniq,
  intersect,
}
