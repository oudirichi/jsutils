import safeAdd from "./safeAdd";

type recordKey = string | number | symbol;
function replicate(collection: Array<Record<recordKey, unknown>>, keys, item) {
    return keys.reduce((acc, keyItem) => {
      collection.forEach((currentRef) => {
        acc.push(safeAdd(currentRef, keyItem, item));
      });

      return acc;
    }, []);
  }

  export default replicate;
