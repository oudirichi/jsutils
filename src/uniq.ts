function uniq(arr: number | string | Array<number|string>): Array<number|string> {
  if (typeof arr == 'number') arr = '' + arr;

  if (typeof arr == 'string') {
    arr = arr.split('');
  }

  return Array.from(new Set(arr));
}

export default uniq;
