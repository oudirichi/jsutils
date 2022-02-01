import replicate from "./replicate";

type recordKey = string | number | symbol;

interface indexByCallback<T> {
  (item: T): Array<recordKey>|recordKey;
}

function indexBy<T>(col: Array<T>, ...args: Array<indexByCallback<T>|recordKey>): Record<recordKey, unknown> {
  const acc: Record<recordKey, unknown> = {};
  const last = args.pop();

  function groupKeys(item: T, groupKey: indexByCallback<T>|recordKey): Array<recordKey> {
    const key: recordKey|Array<recordKey> = (groupKey instanceof Function) ? groupKey(item) : item[groupKey];

    return Array.isArray(key) ? key : [key];
  }

  col.forEach((item) => {
    let current = [acc];

    args.forEach((arg) => {
      const keys = groupKeys(item, arg);
      current = replicate(current, keys, {});
    });

    const keys = groupKeys(item, last);
    replicate(current, keys, item);
  });

  return acc;
}

export default indexBy;
