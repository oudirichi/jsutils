import uniq from "./uniq";

// eslint-disable @typescript-eslint/no-explicit-any
function union(arr1: any[], ...arrs: any[]): any[] {
  return uniq(arr1.concat(...arrs));
}

export default union;
