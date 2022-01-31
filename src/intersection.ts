import uniq from "./uniq";

function intersection(arr1: any, ...arrs: any[]): any {
  if (arrs.length === 0)
    return arr1;
  const arr2 = intersection(arrs[0], ...arrs.slice(1));
  const indexed = arr2.reduce((acc, item) => { acc[item] = item; return acc; }, {});
  return uniq(arr1.filter((value) => value in indexed));
}

export default intersection;
