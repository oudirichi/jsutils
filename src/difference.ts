import uniq from "./uniq";
import union from './union';

function difference(arr1: any[], ...arrs: any[]) {
  if (!arrs.length) return arr1;

  const all = union([], ...arrs);

  const indexed = all.reduce((acc, item) => { acc[item] = item; return acc; }, {});

  return uniq(arr1.filter((value) => !(value in indexed)));
}

export = difference;
