type recordKey = string | number | symbol;

function safeAdd<T>(obj: Record<recordKey, T>, key: recordKey, item: T): T  {
    if (!(key in obj)) obj[key] = item;
    return obj[key];
  }

  export default safeAdd;
