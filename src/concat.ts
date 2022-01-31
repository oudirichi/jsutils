import uniq from "./uniq";

function concat(arr1: any[], ...arrs: any[]): any[] {
  return uniq(arr1.concat(...arrs));
}

export default concat;
